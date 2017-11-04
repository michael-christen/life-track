from django.contrib.auth.models import Group
from django.contrib.auth.models import User

from rest_framework import serializers

from .models import Event


class UserSerializer(serializers.HyperlinkedModelSerializer):
    events = serializers.HyperlinkedRelatedField(
        many=True,
        queryset=Event.objects.all())

    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'events', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class EventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ('url', 'owner', 'name', 'description', 'day')
