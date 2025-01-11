from django.contrib import admin
from .models import ContactForms
from import_export.admin import ImportExportModelAdmin

class ContactAdmin(ImportExportModelAdmin):
    list_display = ('full_name', 'phone', 'email', 'subject')
    search_fields = ('full_name', 'phone', 'email', 'subject')
    list_filter = ('email',)
    ordering = ('email',)

admin.site.register(ContactForms, ContactAdmin)
