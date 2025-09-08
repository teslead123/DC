from django import forms

class DeliveryNoteForm(forms.Form):
    buyer_name = forms.CharField(max_length=200, required=True, label="Buyer Name")
    buyer_address_line1 = forms.CharField(max_length=200, required=True, label="Address Line 1")
    buyer_address_line2 = forms.CharField(max_length=200, required=True, label="Address Line 2")
    buyer_address_line3 = forms.CharField(max_length=200, required=True, label="Address Line 3")
    buyer_gstin = forms.CharField(max_length=50, required=True, label="GSTIN")
    buyer_state = forms.CharField(max_length=100, required=True, label="State")
    buyer_state_code = forms.CharField(max_length=10, required=True, label="State Code")
    dc_no = forms.CharField(max_length=50, required=True, label="DC No")
    dc_date = forms.DateField(widget=forms.DateInput(attrs={'type': 'date'}), required=True, label="DC Date")
    party_ref_no = forms.CharField(max_length=100, required=True, label="Party's Ref No")
    po_ref_no = forms.CharField(max_length=100, required=True, label="PO Ref No")
    footer_note = forms.CharField(widget=forms.Textarea(attrs={'rows': 4}), required=True, label="Footer Note")

class DeliveryItemForm(forms.Form):
    serial_no = forms.IntegerField(required=True, label="S.No")
    description = forms.CharField(widget=forms.Textarea(attrs={'rows': 2}), required=True, label="Description")
    uom = forms.CharField(max_length=50, required=True, label="UOM")
    quantity = forms.DecimalField(max_digits=10, decimal_places=2, required=True, label="Quantity")
    remarks = forms.CharField(widget=forms.Textarea(attrs={'rows': 2}), required=True, label="Remarks")
    DELETE = forms.BooleanField(required=False, widget=forms.CheckboxInput(), label="Delete")

DeliveryItemFormSet = forms.formset_factory(DeliveryItemForm, extra=1, can_delete=True)

from django.apps import AppConfig

class YourAppConfig(AppConfig):
    name = 'dc_app'

    def ready(self):
        from .utils import update_total_dispatch_quantity_raw
        try:
            update_total_dispatch_quantity_raw()
        except Exception as e:
            print(f"[ERROR] Dispatch quantity update failed: {e}")