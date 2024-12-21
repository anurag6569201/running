from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import SchoolRegistrationSerializer
from .models import SchoolRegistration

@api_view(['POST'])
def register_school(request):
    if request.method == 'POST':
        email=request.data['email']

        if SchoolRegistration.objects.filter(email=email).exists():
            return Response({'detail': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = SchoolRegistrationSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
