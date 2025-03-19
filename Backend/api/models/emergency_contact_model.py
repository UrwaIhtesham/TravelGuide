from api.main_models import User
from django.db import models

class EmergencyContact(models.Model):
    contact_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, db_column="user_id")
    contactName = models.CharField(max_length=255)
    contactNumber = models.CharField(max_length=15)
    contactCNIC = models.CharField(max_length=25)
    contactEmail = models.EmailField()
    verified = models.CharField(max_length=12, default='unverified')

    def __str__(self):
        return f"{self.contact_id} {self.contactName} {self.contactNumber}"