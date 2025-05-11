from django.core.mail import send_mail
from django.http import JsonResponse
from api.models.startride_model import StartRide
from api.models.emergency_contact_model import EmergencyContact
from api.main_models import User
from rest_framework.decorators import api_view

@api_view(['POST'])
def send_low_battery_alert(request):
    user_id = request.data.get("user_id")
    latitude = request.data.get("latitude")
    longitude = request.data.get("longitude")

    try:
        user = User.objects.get(user_id=user_id)
    except User.DoesNotExist:
        return JsonResponse({"error": "User not found"}, status=404)

    try:
        ride = StartRide.objects.get(user_id=user.user_id, status = "ongoing")
    except StartRide.DoesNotExist:
        return JsonResponse({'error': 'No active ride found'}, status = 404)
    
    emergency_contacts = EmergencyContact.objects.filter(user_id=user_id)

    google_maps_link = f"https://www.google.com/maps?q={latitude},{longitude}"

    email_subject = "Low Battery Alert - Safety Notification"
    body = (
        f"User {user.full_name} is on a ride and their battery is critically low. (less than 10%)\n\n"
        f"Current Location: {google_maps_link}\n\n"
        f"Kindly Check on them immediately!"
    )

    for contact in emergency_contacts:
        send_mail(
            subject=email_subject,
            message=body,
            from_email="travelguide.f24.107@gmail.com",
            recipient_list=[contact.contactEmail],
            fail_silently=False
        )

    return JsonResponse({"message": "Emergency contacts alerted successfully"}, status=200)

@api_view(['POST'])
def send_checkin_alert(request):
    user_id = request.data.get("user_id")
    latitude = request.data.get("latitude")
    longitude = request.data.get("longitude")

    try:
        user = User.objects.get(user_id=user_id)
    except User.DoesNotExist:
        return JsonResponse({"error": "User not found"}, status=404)

    try:
        ride = StartRide.objects.get(user_id=user.user_id, status = "ongoing")
    except StartRide.DoesNotExist:
        return JsonResponse({'error': 'No active ride found'}, status = 404)
    
    emergency_contacts = EmergencyContact.objects.filter(user_id=user_id)

    google_maps_link = f"https://www.google.com/maps?q={latitude},{longitude}"

    email_subject = "Check In Alert - Safety Notification"
    body = (
        f"CAUTION!!!!!!!!!!!!!!!\nUser {user.full_name} is on a ride and they failed to check in. They might be in an emergency.\n\n"
        f"Current Location: {google_maps_link}\n\n"
        f"Kindly Check on them immediately!"
    )

    for contact in emergency_contacts:
        send_mail(
            subject=email_subject,
            message=body,
            from_email="travelguide.f24.107@gmail.com",
            recipient_list=[contact.contactEmail],
            fail_silently=False
        )

    return JsonResponse({"message": "Emergency contacts alerted successfully"}, status=200)

@api_view(['POST'])
def send_panicmode_alert(request):
    user_id = request.data.get("user_id")
    latitude = request.data.get("latitude")
    longitude = request.data.get("longitude")

    try:
        user = User.objects.get(user_id=user_id)
    except User.DoesNotExist:
        return JsonResponse({"error": "User not found"}, status=404)

    try:
        ride = StartRide.objects.get(user_id=user.user_id, status = "ongoing")
    except StartRide.DoesNotExist:
        return JsonResponse({'error': 'No active ride found'}, status = 404)
    
    emergency_contacts = EmergencyContact.objects.filter(user_id=user_id)

    google_maps_link = f"https://www.google.com/maps?q={latitude},{longitude}"

    email_subject = "Check In Alert - Safety Notification"
    body = (
        f"CAUTION!!!!!!!!!!!!!!!\nUser {user.full_name} is on a ride and they just initiated panic mode. \n\n"
        f"Current Location: {google_maps_link}\n\n"
        f"CHECK ON THEM IMMEDIATELY!"
    )

    for contact in emergency_contacts:
        send_mail(
            subject=email_subject,
            message=body,
            from_email="travelguide.f24.107@gmail.com",
            recipient_list=[contact.contactEmail],
            fail_silently=False
        )

    return JsonResponse({"message": "Emergency contacts alerted successfully"}, status=200)