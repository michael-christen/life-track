from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from rest_framework import viewsets

from .models import Event
from .serializers import EventSerializer
from .serializers import GroupSerializer
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    """API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class EventViewSet(viewsets.ModelViewSet):
    """API endpoint that allows events to be viewed or edited.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
