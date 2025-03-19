from django.contrib.auth import authenticate, login
from api.main_models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.conf import settings
from django.http import JsonResponse
from django.contrib.auth.hashers import check_password

@api_view(['POST'])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return JsonResponse({'error': 'Email and Password are required'}, status=400)
    

    try:
        user = User.objects.get(email=email)
        if user.is_active == 0:
            return JsonResponse({'error': 'Your account is not verified. Please check your email for verification.'}, status = 401)
        if check_password(password, user.password):
            if not request.session.session_key:
                request.session.save()

            request.session['user_id'] = user.user_id
            request.session['email'] = user.email
            request.session['is_authenticated'] = True
            request.session.set_expiry(86400)

            request.session.save()
            session_key = request.session.session_key
            return JsonResponse({'message': 'Login successful', 'user_id': user.user_id, "session_id": session_key}, status=200)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status = 401)
    except User.DoesNotExist:
        return JsonResponse({'error': 'User not found'}, status=404)
        
@api_view(['POST'])
def logout_user(request):
    if 'user_id' in request.session:
        request.session.flush()
        return JsonResponse({'message': 'Logout successful'}, status=200)
    
    return JsonResponse({'error': 'No active session found.'}, status = 400)

@api_view(['GET'])
def check_session(request):
    if request.session.get('is_authenticated'):
        return JsonResponse({'message': 'User is authenticated', "logged_in": True, 'user_id': request.session.get('user_id')}, status = 200)
    return JsonResponse({'error': 'User is not logged in', "logged_in": False}, status=401)