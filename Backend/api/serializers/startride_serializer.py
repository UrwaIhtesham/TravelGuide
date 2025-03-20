from rest_framework import serializers
from api.models.startride_model import StartRide

class StartRideSerializer(serializers.ModelSerializer):
    class Meta:
        model = StartRide
        fields = '__all__'