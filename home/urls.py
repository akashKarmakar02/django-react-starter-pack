from django.urls import path

from home import views

urlpatterns = [
    path('', views.index),
    path('about/', views.about)
]