from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from api.models.emergency_contact_model import EmergencyContact
from api.serializers.emergency_contact_serializer import EmergencyContactSerializer
from api.main_models import User

@api_view(['GET'])
def get_emergency_contacts(request):
    contacts = EmergencyContact.objects.all()
    serializer = EmergencyContactSerializer(contacts, many=True)
    return JsonResponse({"contacts": serializer.data}, safe=False, json_dumps_params={'indent': 2})

@api_view(['POST'])
def add_emergency_contact(request):
    print(f"Request Add Emergency Contact: {request} & {request.data}")
    user_id = request.data.get("user_id")
    contacts = request.data.get("contacts", [])

    if not user_id:
        return JsonResponse({"error": "Missing user id"}, status=400)
    
    try:
        user = User.objects.get(user_id=user_id)
    except User.DoesNotExist:
        return JsonResponse({"error": "User not found"}, status=404)
    
    emergency_contacts = []
    for contact in contacts:
        emergency_contacts.append(EmergencyContact(
            user_id = user,
            contactName=contact["name"],
            contactNumber = contact["phone"],
            contactEmail = contact["email"],
            contactCNIC = contact["cnic"]
        ))

    EmergencyContact.objects.bulk_create(emergency_contacts)
    return JsonResponse({"message": "Emergency contacts added successfully"}, status = 201)

@api_view(['GET'])
def get_emergency_count(request):
    userid = request.GET.get("user_id")
    print(f"Userid: {userid}")
    if not userid:
        return JsonResponse({'error': 'user_id not found.'}, status = 400)
    
    try:
        contact_count = EmergencyContact.objects.filter(user_id=userid).count()
        return JsonResponse({"user_id": userid, "contact_count": contact_count}, status=200)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
    

    
