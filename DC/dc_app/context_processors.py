def user_session_data(request):
    """
    Makes role and employee_id available in all templates.
    """
    return {
        'session_role': request.session.get('role'),
        'session_employee_id': request.session.get('employee_id'),
        'username': request.session.get('username'),
    }
