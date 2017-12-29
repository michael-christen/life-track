import factory


from ..models import Date
from ..models import Entry


class EntryFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Entry

    date = Date
