from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import User
from .serializers import UserSerializer
from rest_framework.decorators import api_view

# signup POST api
@csrf_exempt
def signup(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            serializer = UserSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse({"message": "User created successfully", "user": serializer.data}, status = 201)
            
            return JsonResponse({"errors": serializer.errors}, status=400)

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON format"}, status=400)

    return JsonResponse({"error": "Only POST requests allowed"}, status=405)  

@api_view(['GET'])
def get_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return JsonResponse({"users": serializer.data}, safe=False, json_dumps_params={'indent': 2})      