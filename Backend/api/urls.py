from django.urls import path
from .main_views import signup
from .main_views import get_users, verify_email
from .views.emergency_contacts import add_emergency_contact, get_emergency_contacts, get_emergency_count
from api.views.login_views import login_user, check_session, logout_user
from api.views.startride_view import add_start_ride, get_startride
urlpatterns = [
    path('signup/', signup, name='signup'),
    path('users/', get_users, name='get_users'),
    path('emergency-contacts/add/', add_emergency_contact, name='add_emergency_contact'),
    path('emergency-contacts/', get_emergency_contacts, name='get_emergency_contacts'),
    path('login/', login_user, name='login'),
    path("verify/<str:uidb64>/<str:token>/", verify_email, name="verify_email"),
    path("check-session/", check_session, name='check_session'),
    path("logout_user/", logout_user, name="logout_user"),
    path("emergency-count/", get_emergency_count, name="get_emergency_count"),
    path("add-start-ride/", add_start_ride, name="add_start_ride"),
    path("get-rides/", get_startride, name="get_startride"),
]