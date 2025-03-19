from django.db import models
from api.main_models import User

class StartRide(models.Model):
    ride_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, db_column="user_id")
    startingPoint = models.CharField(max_length=255)
    destination = models.CharField(max_length=255)
    vehicleType = models.CharField(max_length=255, blank=True, null=True)
    licensePlate = models.CharField(max_length=50, blank=True, null=True)
    vehicleInfo = models.TextField(blank=True, null=True)
    modeofTransport = models.CharField(max_length=100, blank=True, null=True)
    nameofPassenger = models.CharField(max_length=255, blank=True, null=True)
    contactPassenger = models.CharField(max_length=20, blank=True, null=True)
    rideCode = models.CharField(max_length=4)
    timeInterval = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Ride {self.ride_id}"