from django.urls import path
from .views import signup
from .views import get_users

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('users/', get_users, name='get_users'),
]