# admin.py
from django.contrib import admin
from .models import SchoolRegistration
from import_export.admin import ImportExportModelAdmin


class SchoolAdmin(ImportExportModelAdmin):
    list_display = ('school_name', 'city', 'state', 'pincode', 'first_name', 'surname', 'email')
    search_fields = ('school_name', 'city', 'state', 'first_name', 'surname', 'email')
    list_filter = ('state',)
    ordering = ('school_name',)

admin.site.register(SchoolRegistration, SchoolAdmin)
