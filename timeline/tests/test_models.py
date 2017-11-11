from django.test import TestCase

from ..models import Link
from ..models import Summary


class TestLinkUsage(TestCase):
    def test_basic(self):
        l = Link.objects.create(path='http://google.com')
        l2 = Link.objects.create(path='http://yahoo.com')
        s = Summary.objects.create(title='hi', description='hey', rating=0)
        s.curated_links.add(l)
        self.assertEquals(l, s.curated_links.get())
