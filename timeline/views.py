"""REST Framework Viewsets for timeline.

TODO:
    - Remove generic User/Group ViewSets
    - Filter queryset by user automatically
"""
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from django_filters import rest_framework as filters
from rest_framework import viewsets
from rest_framework import exceptions

from .models import Summary
from .models import Link
from .models import Activity
from .serializers import GroupSerializer
from .serializers import LinkSerializer
from .serializers import SummarySerializer
from .serializers import UserSerializer
from .serializers import ActivitySerializer


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


class LinkFilter(filters.FilterSet):
    begin = filters.DateFilter(name="date", lookup_expr='gte')
    end = filters.DateFilter(name="date", lookup_expr='lte')

    class Meta:
        model = Link
        fields = ['begin', 'end']


class LinkViewSet(viewsets.ModelViewSet):
    """API endpoint that allows links to be viewed or edited.
    """
    serializer_class = LinkSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = LinkFilter

    def get_queryset(self):
        queryset = Link.objects.all()
        # TODO: Enable when switching to postgres
        # unique = self.request.query_params.get('unique', None)
        # # TODO: Separate this into utility
        # if unique:
        #     queryset = queryset.distinct('date')
        return queryset


class ActivityViewSet(viewsets.ModelViewSet):
    serializer_class = ActivitySerializer

    def get_queryset(self):
        user = self.request.user
        if user.is_anonymous:
            return Activity.objects.none()
        return Activity.objects.filter(user=user)

    def perform_create(self, serializer):
        user = self.request.user
        print user
        if user.is_anonymous:
            raise exceptions.AuthenticationFailed('Require user')
        serializer.save(user=self.request.user)
