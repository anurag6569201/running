# Generated by Django 5.1.4 on 2024-12-21 07:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="SchoolRegistration",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("school_name", models.CharField(max_length=255)),
                ("street_address", models.CharField(max_length=255)),
                ("city", models.CharField(max_length=100)),
                ("state", models.CharField(max_length=100)),
                ("pincode", models.CharField(max_length=20)),
                ("school_website", models.URLField(blank=True, null=True)),
                ("first_name", models.CharField(max_length=100)),
                ("surname", models.CharField(max_length=100)),
                ("phone_number", models.CharField(max_length=20)),
                ("email", models.EmailField(max_length=254)),
            ],
        ),
    ]
