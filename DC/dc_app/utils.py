from django.db import connection

def update_total_dispatch_quantity_raw():
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
    print("✅ total_dispatch_quantity updated from dc_description at server start.")
