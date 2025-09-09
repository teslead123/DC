from django.apps import AppConfig

class DcAppConfig(AppConfig):  # Make sure this name matches your app
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'dc_app'  # Update with your actual app name

    def ready(self):
        print("📦 App is ready. Running quantity update...")
        from .utils import update_total_dispatch_quantity_raw
        try:
            update_total_dispatch_quantity_raw()
        except Exception as e:
            print(f"❌ Error updating dispatch quantities: {e}")
import threading
import time
from datetime import datetime, timedelta
from django.apps import AppConfig
from django.db import connection

last_tracked_time = None  # Tracks last change in DB
last_print_time = datetime.min  # Tracks last printed time (initially very old)

def has_dc_tables_changed():
    """Check if dc_description or dc_details tables have changed"""
    global last_tracked_time
    with connection.cursor() as cursor:
        cursor.execute("SELECT last_changed FROM global_change_tracker WHERE id = 1;")
        current_time = cursor.fetchone()[0]
    if current_time != last_tracked_time:
        last_tracked_time = current_time
        return True
    return False

def update_total_dispatch_quantity_raw():
    """Run the SQL update logic and print message (with throttle)"""
    global last_print_time
    with connection.cursor() as cursor:
        cursor.execute("""
            UPDATE dc_details d
            JOIN (
                SELECT dc_number, SUM(quantity) AS total_qty
                FROM dc_description
                GROUP BY dc_number
            ) desc_summary
            ON d.dc_number = desc_summary.dc_number
            SET d.total_dispatch_quantity = desc_summary.total_qty;
        """)
    
    # Print only if 1 minute has passed since last print
    now = datetime.now()
    if now - last_print_time >= timedelta(minutes=1):
        print(f"✅ Dispatch quantity updated at {now}")
        last_print_time = now

def start_change_watcher():
    """Continuously monitor for DB changes and trigger update"""
    while True:
        try:
            if has_dc_tables_changed():
                update_total_dispatch_quantity_raw()
        except Exception as e:
            print("❌ Error during update:", e)
        time.sleep(2)  # Check every 2 seconds

class DcAppConfig(AppConfig):
    name = 'dc_app'

    def ready(self):
        """Start the background watcher when the app is ready"""
        if not hasattr(self, '_watcher_started'):
            self._watcher_started = True
            t = threading.Thread(target=start_change_watcher)
            t.daemon = True
            t.start()
