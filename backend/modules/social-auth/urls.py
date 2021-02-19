from django.urls import path, include
from .views import FacebookLogin, GoogleLogin, AppleLogin
from rest_auth.registration.views import (
    SocialAccountListView,
    SocialAccountDisconnectView,
)

urlpatterns = [
    path('facebook/connect/', FacebookLogin.as_view(),
         name='social_facebook_connect'),
    path('google/connect/', GoogleLogin.as_view(), name='social_google_connect'),
    path('apple/connect/', AppleLogin.as_view(), name='social_apple_connect'),

    # List all connected social accounts -> Developer can use to get pk for disconnecting
    path(
        "socialaccounts/", SocialAccountListView.as_view(), name="social_account_list"
    ),
    # Allows to disconnect social account
    path(
        "socialaccounts/<int:pk>/disconnect/",
        SocialAccountDisconnectView.as_view(),
        name="social_account_disconnect",
    ),
]
