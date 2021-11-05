from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.


def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/products/create',
    ]
    return JsonResponse(routes, safe=False)
