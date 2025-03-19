from django.urls import path
from .main_views import signup
from .main_views import get_users, verify_email
from .views.emergency_contacts import add_emergency_contact, get_emergency_contacts
from api.views.login_views import login_user

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('users/', get_users, name='get_users'),
    path('emergency-contacts/add/', add_emergency_contact, name='add_emergency_contact'),
    path('emergency-contacts/', get_emergency_contacts, name='get_emergency_contacts'),
    path('login/', login_user, name='login'),
    path("verify/<str:uidb64>/<str:token>/", verify_email, name="verify_email"),
]