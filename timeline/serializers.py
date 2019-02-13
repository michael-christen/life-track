from django.contrib.auth.models import Group
from django.contrib.auth.models import User

from rest_framework import serializers

from .models import Summary
from .models import Link
from .models import Activity


class UserSerializer(serializers.HyperlinkedModelSerializer):
    # TODO: HyperlinkedRelatedField
    summaries = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Summary.objects.all())

    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'summaries', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class SummarySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Summary
        fields = ('url', 'rating', 'title', 'begin', 'end', 'description')


class LinkSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Link
        fields = ('url', 'title', 'date', 'owner', 'path')


class ActivitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Activity
        fields = ('type', 'role', 'category', 'sub_category', 'project',
                  'start', 'end',
                  )
