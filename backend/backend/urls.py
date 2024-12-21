# backend/urls.py
from django.contrib import admin
from django.urls import path, include
from contact import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index,name="index"),
    path('api/', include('contact.urls')), 
    path('api/', include('register.urls')), 
]
