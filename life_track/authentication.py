from django.contrib.auth.models import User
from rest_framework import authentication
from rest_framework import exceptions


class MockAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        try:
            return (
                User.objects.get(username='mchristen'),
                None,
            )
        except User.DoesNotExist:
            raise exceptions.AuthenticationFailed('no user')
