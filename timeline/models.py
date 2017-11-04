from __future__ import unicode_literals

from django.db import models


MAX_NAME_LENGTH = 256


class Event(models.Model):
    day = models.DateField()
    name = models.CharField(max_length=MAX_NAME_LENGTH)
    description = models.TextField()
