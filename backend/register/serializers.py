from rest_framework import serializers
from .models import SchoolRegistration

class SchoolRegistrationSerializer(serializers.ModelSerializer):
    schoolName = serializers.CharField(source='school_name')
    streetAddress = serializers.CharField(source='street_address')
    city = serializers.CharField()
    state = serializers.CharField()
    pincode = serializers.CharField()
    schoolWebsite = serializers.URLField(source='school_website')
    firstName = serializers.CharField(source='first_name')
    surname = serializers.CharField()
    phoneNumber = serializers.CharField(source='phone_number')
    email = serializers.EmailField()

    class Meta:
        model = SchoolRegistration
        fields = [
            'schoolName', 'streetAddress', 'city', 'state', 'pincode',
            'schoolWebsite', 'firstName', 'surname', 'phoneNumber', 'email'
        ]
