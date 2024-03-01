from django.shortcuts import render
from inertia import inertia


# Create your views here.
@inertia('index')
def index(request):
    return {}


@inertia('about')
def about(request):
    return {}
