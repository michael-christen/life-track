from time import strptime
from datetime import timedelta

from django.db.models import Sum
from django.db import models
from django.test import TestCase
from django.contrib.auth import get_user_model

from ..models import Link
from ..models import Summary
from ..models import Activity


class TestLinkUsage(TestCase):
    def test_basic(self):
        link = Link.objects.create(path='http://google.com')
        s = Summary.objects.create(title='hi', description='hey', rating=0)
        s.curated_links.add(link)
        self.assertEquals(link, s.curated_links.get())


def t(time_string):
    return strptime(time_string, "%m/%d/%Y %H:%M:%S")


class TestActivity(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(username='test',
                                                         password='test')
        self.client.login(username='test', password='test')

    def tearDown(self):
        Activity.objects.all().delete()

    def test_basic(self):
        Activity.objects.create(
            user=self.user, type="coding", role="personal",
            description="Making tests",
            start="2019-01-01 13:12:11", end="2019-01-01 14:14:13",
        )
        self.assertEquals(timedelta(hours=1, minutes=2, seconds=2),
                          Activity.objects.with_duration().get().duration)
        Activity.objects.create(
            user=self.user, type="blah", role="personal",
            description="stuff",
            start="2019-01-01 11:12:11", end="2019-01-01 14:12:11",
        )
        Activity.objects.create(
            user=self.user, type="coding", role="personal",
            description="stuff",
            start="2019-01-01 15:32:00", end="2019-01-01 15:46:11",
        )
        # Got from:
        # https://stackoverflow.com/questions/43007595/aggregation-of-an-annotation-in-group-by-in-django
        types_with_duration = (
            Activity.objects
            .order_by()
            .with_duration()
            .annotate(total_duration=Sum('duration'))
            # Group by type
            .values('type', 'total_duration')
            # Random annotation necessary for group by
            .annotate(activities_count=models.Count('id'))
        )
        type2count_w_duration = {}
        for typ in types_with_duration:
            type2count_w_duration[typ['type']] = (
                typ['activities_count'], typ['total_duration'])
        self.assertEquals({
            'blah': (1, timedelta(hours=3)),
            'coding': (2, timedelta(hours=1, minutes=16, seconds=13)),
        }, type2count_w_duration)
