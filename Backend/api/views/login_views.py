from django.contrib.auth import authenticate
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
            return JsonResponse({'message': 'Login successful', 'user_id': user.user_id}, status=200)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status = 401)
    except User.DoesNotExist:
        return JsonResponse({'error': 'User not found'}, status=404)
        