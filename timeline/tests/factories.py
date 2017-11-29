import factory


from ..models import Entry


class EntryFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Entry

    date = models.Date
