from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.mail import send_mail
from django.template.loader import render_to_string
from .serializers import ContactFormSerializer
from django.shortcuts import render, redirect
from contact.models import ContactForms


class ContactFormAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ContactFormSerializer(data=request.data)
        if serializer.is_valid():
            # Extract data from serializer
            full_name = serializer.validated_data['full_name']
            phone = serializer.validated_data.get('phone', '')
            email = serializer.validated_data['email']
            subject = serializer.validated_data['subject']
            message = serializer.validated_data['message']
            
            if ContactForms.objects.filter(email=email).exists():
                return Response(
                    {"error": "This email has already been used to submit a form."},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            contact_form = ContactForms.objects.create(
                full_name=full_name,
                phone=phone,
                email=email,
                subject=subject,
                message=message
            )
            contact_form.save()
            
            print(full_name, phone, email, subject, message)

            email_subject = f"New Contact Form Submission: {subject}"
            email_body = render_to_string(
                'core/email.html',  # Path to the email template
                {
                    'full_name': full_name,
                    'phone': phone,
                    'email': email,
                    'subject': subject,
                    'message': message,
                }
            )
            send_mail(
                email_subject,
                '',  # No plain text body, just HTML
                email,  # Sender email
                ['kiitscup@gmail.com'],  # Your email to receive the contact form submissions
                html_message=email_body,  # HTML email body
                fail_silently=False,
            )
            return Response({"message": "Thank you for your message! We will get back to you soon."}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
