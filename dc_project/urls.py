from django.urls import path
from dc_app import views

urlpatterns = [
    path('', views.index, name='index'),
    # path('abipet/', views.abipet, name='abipet'),

    path('base/', views.base, name='base'),
  
    path('new_username/', views.new_username, name='new_username'),
    path('new_pwd/', views.new_pwd, name='new_pwd'),
    path('logout/', views.logout_user, name='logout_user'),
    path('check_session/', views.check_session, name='check_session'),
    path('recover_username/', views.recover_username, name='recover_username'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('dc_form/', views.dc_form, name='dc_form'),
    path('profile/', views.profile, name='profile'),
    path('settings_page/', views.settings_page, name='settings_page'),
    path('users/', views.user_list, name='user_list'),
    
    # Delivery Challan URLs
    path('delivery-challans/', views.delivery_challan_list, name='delivery_challan_list'),
    path('delivery-challan/<int:dc_id>/', views.delivery_challan_view, name='delivery_challan_view'),
   
    # path('items/<int:item_id>/details/', views.item_details, name='item_details'),
    path('delivery-challan/json/<str:dc_number>/', views.delivery_challan_json, name='delivery_challan_json'),
        
    path('api/states/', views.get_states, name='get_states'),
    path('api/cities/', views.get_cities, name='get_cities'),
    path('api/suppliers/', views.supplier_autocomplete, name='supplier_autocomplete'),
    path('update-delivery-note/', views.update_delivery_note, name='update_delivery_note'),

    path('dc/<int:dc_id>/', views.delivery_challan_view, name='delivery_challan_view'),
    path('dc/item/<int:item_id>/', views.dc_item_details, name='dc_item_details'),



    # Delivery Note APIs
    path('get-next-dc-number/', views.get_next_dc_number, name='get_next_dc_number'),
    path('save-delivery-note/', views.save_delivery_note, name='save_delivery_note'),
    # path('update-delivery-note/', views.update_delivery_note, name='update_delivery_note'),
    
    # Report & PDF
    path('generate-pdf/', views.generate_pdf, name='generate_pdf'),
    path('download-pdf/', views.download_pdf, name='download_pdf'),
    path('delivery-challan-report/', views.delivery_challan_report, name='delivery_challan_report'),
    
    
    # DC Status Views
    path('partial-dc/', views.partial_dc_list, name='partial_dc_list'),
    path('close-dc/', views.close_dc_list, name='close_dc_list'),

    # View a specific partial challan by ID
    path('partial-challans/<int:dc_id>/', views.partial_challan_view, name='partial_challan_view'),
    path('partial-update-note/', views.partial_update_note, name='partial_update_note'),

    # API logout (can be used by JavaScript/AJAX)
    path('all_dc/', views.all_delivery_challan_list, name='all_delivery_challan_list'),
    path('api/logout/', views.logout_user, name='logout_user'),
    path('api/create_user/', views.create_user, name='create_user'),
    path('api/edit_user/', views.edit_user, name='edit_user'),
  
    path('api/create_party/', views.create_party, name='create_party'),
    path('api/edit_party/', views.edit_party, name='edit_party'),
    path('api/delete_party/', views.delete_party, name='delete_party'),
    path('parties/', views.party_list_view, name='party_list'),
    path('api/view_party/<int:party_id>/', views.view_party, name='view_party'),

    path('supplier-autocomplete/', views.supplier_autocomplete, name='supplier_autocomplete'),
    path('supplier-details/', views.supplier_details, name='supplier_details'),  
    path('draft/', views.draft_delivery_challan, name='draft_delivery_challan'),
   
    path('draft-list/', views.draft_list, name='draft_list'),
    path('draft-delivery-challan/', views.draft_delivery_challan, name='draft_delivery_challan'),
    path('draft/<int:draft_id>/', views.draft_view, name='draft_view'),
    path('items/<int:item_id>/details/', views.item_details, name='item_details'),
    
    # urls.py
    path("delete-draft/<int:draft_id>/", views.delete_draft, name="delete_draft"),

  
    path('items/', views.item_list_view, name='item_list'),
    path('api/view_item/<int:item_id>/', views.view_item, name='view_item'),
    path('api/create_item/', views.create_item, name='create_item'),
    path('api/edit_item/', views.edit_item, name='edit_item'),
    path('api/delete_item/', views.delete_item, name='delete_item'),
    
    path('api/get-user-info/', views.get_user_info, name='get_user_info'),
    path('api/update-profile/', views.update_profile, name='update_profile'),
    path('api/change-password/', views.change_password, name='change_password'),
    path('api/send-otp/', views.send_otp, name='send_otp'),
    path('api/change-password-otp/', views.change_password_otp, name='change_password_otp'),
    path('api/create-user/', views.create_user, name='create_user'),
    
    path('autocomplete/supplier/', views.supplier_autocomplete, name='supplier_autocomplete'),
    path('autocomplete/item/', views.item_autocomplete, name='item_autocomplete'),
    path('autocomplete/dc_description/', views.dc_description_autocomplete, name='dc_description_autocomplete'),
    path('add_supplier/', views.add_supplier, name='add_supplier'),
    path("update_supplier/", views.update_supplier, name="update_supplier"),
    path("check_supplier/", views.check_supplier, name="check_supplier"),
    path('autocomplete/supplier/', views.supplier_autocomplete, name='supplier_autocomplete'),
    path('autocomplete/item/', views.item_autocomplete, name='item_autocomplete'),
    path('save_draft/', views.save_draft, name='save_draft'),
    path('update-draft/', views.update_draft, name='update_draft'),
    path('get-draft/<int:draft_id>/', views.get_draft, name='get_draft'),
    path('overall_dc',views.overall_dc),
    path('closed_dc/<int:dc_id>/', views.closed_dc_view, name='closed_dc_view'),
    
    path('dept-wise-dc/', views.dept_wise_dc_view, name='dept_wise_dc'),
    path('api/dept-wise-dc/', views.dept_wise_dc_api, name='dept_wise_dc_api'),
    path('report/dept-wise/', views.dept_wise_report, name='dept_wise_report'),
    path('report/dc-details/<str:dc_number>/', views.dc_details_report, name='dc_details_report'),
    path('api/dc/delete/<int:dc_id>', views.delete_dc, name='delete_dc'),
    
    # Cancelled and Deleted DC URLs
    path('cancelled-dc/', views.cancelled_dc_list, name='cancelled_dc_list'),
    path('cancelled-dc/<int:dc_id>/', views.cancelled_dc_view, name='cancelled_dc_view'),
    path('api/dc/restore-cancelled/<int:dc_id>/', views.restore_cancelled_dc, name='restore_cancelled_dc'),
    
    # Enhanced Cycle Completion Status Tracking URLs
    path('user/validate_serial_number/', views.validate_serial_number, name='validate_serial_number'),
    path('user/get_component_data/', views.get_component_data, name='get_component_data'),
    path('user/get_cycle_status_data/', views.get_cycle_status_data, name='get_cycle_status_data'),
    path('user/save_cycle_status/', views.save_cycle_status, name='save_cycle_status'),
    path('user/get_real_time_status/', views.get_real_time_status, name='get_real_time_status'),
    
    # Party-wise DC URLs
    path('party-wise-dc/', views.party_wise_dc_list, name='party_wise_dc_list'),
    path('party-wise-dc/<str:party_name>/', views.party_wise_dc_details, name='party_wise_dc_details'),
    
    # Deleted DC URLs
    path('deleted-dc/', views.deleted_dc_list, name='deleted_dc_list'),
    path('deleted-dc/<int:dc_id>/', views.deleted_dc_view, name='deleted_dc_view'),
    path('api/dc/restore/<int:dc_id>/', views.restore_dc, name='restore_dc'),
    path('api/dc/delete-permanent/<int:dc_id>/', views.delete_dc, name='delete_dc_permanent'),
]
