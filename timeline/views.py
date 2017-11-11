"""REST Framework Viewsets for timeline.

TODO:
    - Remove generic User/Group ViewSets
"""
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from rest_framework import viewsets

from .models import Summary
from .models import Link
from .serializers import GroupSerializer
from .serializers import LinkSerializer
from .serializers import SummarySerializer
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


class SummaryViewSet(viewsets.ModelViewSet):
    """API endpoint that allows summaries to be viewed or edited.
    """
    queryset = Summary.objects.all()
    serializer_class = SummarySerializer


class LinkViewSet(viewsets.ModelViewSet):
    """API endpoint that allows links to be viewed or edited.
    """
    queryset = Link.objects.all()
    serializer_class = LinkSerializer
