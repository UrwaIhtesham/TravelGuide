from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .main_models import User
from .main_serializers import UserSerializer
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.contrib.auth.tokens import default_token_generator
from django.shortcuts import get_object_or_404


# signup POST api
@api_view(['POST'])
def signup(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            serializer = UserSerializer(data=data)
            if serializer.is_valid():
                user = serializer.save()
                user.is_active = False
                user.save()

                uid = urlsafe_base64_encode(force_bytes(user.pk))
                token = default_token_generator.make_token(user)
                
                verification_link = f"http://192.168.10.8:8000/api/verify/{uid}/{token}/"

                send_mail(
                    subject="Verify Your EMail",
                    message=f"Click the link to verify your account: {verification_link}",
                    from_email="travelguide.f24.107@gmail.com",
                    recipient_list=[user.email],
                    fail_silently=False,
                )
                return JsonResponse({"message": "SignUp Successful. Verify your email.", "user": serializer.data["user_id"], "uid": uid, "token": token}, status = 201)
            
            return JsonResponse({"errors": serializer.errors}, status=400)

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON format"}, status=400)

    return JsonResponse({"error": "Only POST requests allowed"}, status=405)  

@api_view(['GET'])
def verify_email(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = get_object_or_404(User, pk=uid)
    except (TypeError, ValueError, OverflowError):
        return JsonResponse({'error': "Invalid activation link"}, status=400)
    
    if default_token_generator.check_token(user, token):
        user.is_active = True
        user.save()
        return JsonResponse({"message": "Email verified successfully. You can now login."}, status = 200)
    
    return JsonResponse({"error": "Invalid token"}, status=400)

@api_view(['GET'])
def get_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return JsonResponse({"users": serializer.data}, safe=False, json_dumps_params={'indent': 2})   

@api_view(['POST'])
def get_user_by_id(request):
    data = json.loads(request.body)
    user_id = data.get('user_id')
    print('user_id:', user_id)
    if not user_id:
        return JsonResponse({'error': 'user_id is required'}, status=400)
    
    try:
        user = User.objects.get(user_id=user_id)
        return JsonResponse({'message': 'User found', 'user': {
            'name': user.full_name,
            'email': user.email,
        }}, status=200)
    except User.DoesNotExist:
        return JsonResponse({'error': 'User not found'}, status=404)