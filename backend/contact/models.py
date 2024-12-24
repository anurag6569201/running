from django.db import models

class ContactForms(models.Model):
    full_name=models.CharField(max_length=100)
    phone=models.CharField(max_length=15)
    email=models.EmailField()
    subject=models.CharField(max_length=255)
    message=models.TextField()
