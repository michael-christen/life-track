from django.conf.urls import include
from django.conf.urls import url
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'events', views.EventViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/',
        include('rest_framework.urls', namespace='rest_framework')),
]
