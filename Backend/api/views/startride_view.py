from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from api.main_models import User
from api.models.startride_model import StartRide
from api.serializers.startride_serializer import StartRideSerializer

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
    licensePlate = request.data.get("licensePlate", "")
    vehicleInfo = request.data.get("vehicleInfo", "")
    modeofTransport = request.data.get("modeofTransport", "")
    nameofPassenger = request.data.get("nameofPassenger", "")
    contactPassenger = request.data.get("contactPassenger", "")
    rideCode = request.data.get("rideCode", "")
    timeInterval = request.data.get("timeInterval", "")

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

    return JsonResponse({'message': "Ride added successfully"}, status=201)

@api_view(['GET'])
def get_startride(request):
    rides = StartRide.objects.all()
    serializer = StartRideSerializer(rides, many=True)
    return JsonResponse({"rides": serializer.data}, safe=False, json_dumps_params={'indent': 2})