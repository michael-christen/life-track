from django.test import TestCase

from ..models import Link
from ..models import Summary


class TestLinkUsage(TestCase):
    def test_basic(self):
        link = Link.objects.create(path='http://google.com')
        s = Summary.objects.create(title='hi', description='hey', rating=0)
        s.curated_links.add(link)
        self.assertEquals(link, s.curated_links.get())
