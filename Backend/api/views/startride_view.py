from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
import json
from api.main_models import User
from api.models.startride_model import StartRide
from api.serializers.startride_serializer import StartRideSerializer
from api.models.emergency_contact_model import EmergencyContact

@api_view(['POST'])
def add_start_ride(request):
    user_id = request.data.get("user_id")

    if not user_id:
        return JsonResponse({"error": "Missing user id"}, status=400)
    
    try:
        user = User.objects.get(user_id=user_id)
    except User.DoesNotExist:
        return JsonResponse({"error": "User not found"}, status=404)

    user_id = user
    startingPoint = request.data.get("startingPoint", "")
    destination = request.data.get("destination", "")
    vehicleType = request.data.get("vehicleType", "")
    licensePlate = request.data.get("licenseplate", "")
    vehicleInfo = request.data.get("vehicleinfo", "")
    modeofTransport = request.data.get("modeofTransport", "")
    nameofPassenger = request.data.get("nameofPassenger", "")
    contactPassenger = request.data.get("contactPassenger", "")
    rideCode = request.data.get("rideCode", "")
    timeInterval = request.data.get("timeInterval", "")

    latitude = request.data.get("latitude", "")
    longitude = request.data.get("longitude", "")

    google_maps_link = f"https://www.google.com/maps?q={latitude},{longitude}"

    start_ride = StartRide(
        user_id=user,
        startingPoint=startingPoint,
        destination=destination,
        vehicleType=vehicleType,
        licensePlate=licensePlate,
        vehicleInfo=vehicleInfo,
        modeofTransport=modeofTransport,
        nameofPassenger=nameofPassenger,
        contactPassenger=contactPassenger,
        rideCode=rideCode,
        timeInterval=timeInterval
    )

    start_ride.save()

    emergency_contacts = EmergencyContact.objects.filter(user_id=user)
    contact_emails = [contact.contactEmail for contact in emergency_contacts if contact.contactEmail]

    if contact_emails:
        subject = "Emergency Alert: User Ride Information"
        message = (
            f"Hello from Travel Guide,\n\n"
            f"Your acquaintance {user.full_name} has just initialized our start ride feature.\n\n"
            f"Ride Details:\n"
            f"From: {startingPoint}\n"
            f"To: {destination}\n"
            f"Vehicle: {vehicleType} - Vehicle Info: {vehicleInfo} - License Plate: {licensePlate}\n"
            f"User's current location:\n"
            f"🔗 View on Google Maps: {google_maps_link}\n\n\n"
            f"Travel Guide - TravelConfidently\ntravelguide.f24.107@gmail.com"
        )

        send_mail(
            subject = subject,
            message = message,
            from_email = "travelguide.f24.107@gmail.com",
            recipient_list = contact_emails,
            fail_silently=False,
        )

    return JsonResponse({'message': "Ride added successfully"}, status=201)

@api_view(['GET'])
def get_startride(request):
    rides = StartRide.objects.all()
    serializer = StartRideSerializer(rides, many=True)
    return JsonResponse({"rides": serializer.data}, safe=False, json_dumps_params={'indent': 2})