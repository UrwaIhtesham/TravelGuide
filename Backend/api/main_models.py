from django.db import models
from django.utils.timezone import now
from django.contrib.auth.models import AbstractUser

#User table model
class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    full_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length = 15)
    CNIC = models.CharField(max_length=25, blank=True, null=True)
    gender = models.CharField(max_length=10, null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    password = models.CharField(max_length=255)
    address = models.CharField(max_length=255, null=True, blank=True)
    is_active = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.full_name
    
    def get_email_field_name(self):
        return "email"