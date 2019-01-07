import csv
import sys
import time

from django.core.management.base import BaseCommand
from django.core.management.base import CommandError
from django.contrib.auth import get_user_model

from timeline.models import Activity


# TODO: Setup for tz


class Command(BaseCommand):
    help = 'Import activities from CSV'

    def add_arguments(self, parser):
        parser.add_argument('user', type=str)

    def handle(self, *args, **options):
        user = options['user']
        user_cls = get_user_model()
        try:
            user = user_cls.objects.get(username=user)
        except user_cls.DoesNotExist:
            raise CommandError("Invalid user")

        reader = csv.DictReader(sys.stdin)
        for row in reader:
            a = Activity()
            a.type = row['Project']
            a.role = row['Role']
            a.description = row['Description']
            # TODO:
            # category, project, sub_category
            # "1/4/2019 18:08:59"
            end_datetime = row['Timestamp']
            end_dt = time.strptime(end_datetime, "%m/%d/%Y %H:%M:%S")
            # "2:03:00 PM"
            start_time = row['Start']
            start_dt = time.strptime("{}/{}/{} ".format(
                end_dt.tm_mon, end_dt.tm_mday, end_dt.tm_year) + start_time,
                "%m/%d/%Y %I:%M:%S %p")
            # TODO: Better timezone conversion
            a.end = time.strftime("%Y-%m-%d %H:%M:%S-0800", end_dt)
            a.start = time.strftime("%Y-%m-%d %H:%M:%S-0800", start_dt)
            a.user = user
            a.save()
