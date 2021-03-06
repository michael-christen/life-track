from django.conf.urls import include
from django.conf.urls import url
from rest_framework import routers
from rest_framework.schemas import get_schema_view

from . import views

schema_view = get_schema_view(title='Timeline API')

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'summaries', views.SummaryViewSet)
router.register(r'links', views.LinkViewSet, base_name='link')

urlpatterns = [
    url(r'^schema/$', schema_view),
    url(r'^', include(router.urls)),
    url(r'^api-auth/',
        include('rest_framework.urls', namespace='rest_framework')),
]
