from django.urls import reverse
from django.contrib.auth.models import User

from rest_framework import status
from rest_framework.test import APITestCase

from timeline.models import Activity


class ActivityTests(APITestCase):
    def setUp(self):
        self.user, _ = User.objects.get_or_create(username='mchristen')
        self.client.force_authenticate(user=self.user)

    def tearDown(self):
        Activity.objects.all().delete()

    def test_create_basic_activity(self):
        """Ensure we can create a simple Activity.
        """
        # TODO: Figure out how to use reverse
        # url = reverse('activity')
        url = '/api/timeline/activities/'
        data = {
            'role': "Personal",
            'type': "this-project",
            'start': "2019-01-01 13:12:11",
            'end': "2019-01-01 14:14:13",
            'description': "I did some stuff",
        }
        response = self.client.post(url, data, format='json')
        self.assertEquals(status.HTTP_201_CREATED, response.status_code)
        self.assertEquals(1, Activity.objects.count())
        activity = Activity.objects.get()
        self.assertEquals(self.user, activity.user)
        self.assertTrue(data.items() <= response.data.items())
        self.assertEquals('Personal', activity.role)
        self.assertEquals(data['description'], activity.description)
        # TODO: Datetime TZ, etc.

    # TODO: w/o user
