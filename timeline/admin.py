from django.contrib import admin

from .models import Summary
from .models import Activity


admin.site.register(Summary)
admin.site.register(Activity)
