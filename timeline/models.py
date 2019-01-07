from __future__ import unicode_literals

import datetime

from django.db import models
from django.conf import settings


MAX_NAME_LENGTH = 256
MAX_URL_LENGTH = 256


class Summary(models.Model):
    """Review over a certain date range.

    Attributes: Basic fields for summarizing a given date range
        - title: Short descriptor for given date range
        - description: In depth description for date range
        - rating: Subjective rating of day
        - begin, end: start and ends of date range

        - curated_links: Specially selected links

    TODO:
    Helper functions are provided for
    aggregating models within the given date range.
    """
    title = models.CharField(max_length=MAX_NAME_LENGTH)
    description = models.TextField()
    # TODO: Add validation 1-10
    rating = models.PositiveSmallIntegerField()

    owner = models.ForeignKey(settings.AUTH_USER_MODEL,
                              null=True, related_name='summaries')

    # TODO: Add validation (begin <= end)
    begin = models.DateField(default=datetime.date.today)
    end = models.DateField(default=datetime.date.today)

    curated_links = models.ManyToManyField('Link')

    def __unicode__(self):
        return '{} ({}): [{}, {}]'.format(
            self.title, self.rating, self.begin, self.end)


# TODO: Evaluate polymorphism
class _Entry(models.Model):
    title = models.CharField(max_length=MAX_NAME_LENGTH)
    # TODO: Maybe don't add defaults
    date = models.DateField(default=datetime.date.today)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL,
                              null=True, related_name='entries')

    class Meta:
        abstract = True

    def __unicode__(self):
        return '{} ({})'.format(self.title, self.date)


class Link(_Entry):
    path = models.URLField(max_length=MAX_URL_LENGTH)

    def __unicode__(self):
        return '{} [{}]'.format(super(Link, self).__unicode__(), self.path)


class Activity(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='activities')

    type = models.CharField(max_length=MAX_NAME_LENGTH)
    role = models.CharField(max_length=MAX_NAME_LENGTH)
    category = models.CharField(max_length=MAX_NAME_LENGTH)
    sub_category = models.CharField(max_length=MAX_NAME_LENGTH)
    project = models.CharField(max_length=MAX_NAME_LENGTH)

    description = models.TextField()

    start = models.DateTimeField()
    end = models.DateTimeField()



# TODO: Add Support for photos, statistics
# class Statistic(Entry):
#     label = models.CharField(max_length=MAX_NAME_LENGTH)
#     value = models.IntegerField()

# TODO: Evaluate ordering entries
# class OrderedEntryCollection(models.Model):
#     summary = models.ForeignKey('Summary', on_delete=models.CASCADE)
#     entry = models.ForeignKey('Entry', on_delete=models.CASCADE)
#     order = models.PositiveIntegerField()
