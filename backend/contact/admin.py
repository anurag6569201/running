from django.contrib import admin
from .models import ContactForms

class ContactAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'phone', 'email', 'subject')
    search_fields = ('full_name', 'phone', 'email', 'subject')
    list_filter = ('email',)
    ordering = ('email',)

admin.site.register(ContactForms, ContactAdmin)
