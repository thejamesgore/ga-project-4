from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.


def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/products/create/',
        'api/products/upload/',
        '/api/prodcts/<id>/reviews/',
        '/api/products/top/',
        'api/products/delete/<id>',
        '/api/products/<update>/<id>/',
    ]
    return JsonResponse(routes, safe=False)
