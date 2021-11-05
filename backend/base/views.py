from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product
from .products import products
from base.serializers import ProductSerializer


# api_view handy as will return all routes via browser also and provides other options
@api_view(['GET'])
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
    return Response(routes)


# Will return all products
@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


# To get a single product by id for loop will go through list of products and match the _id to
# the product key that is entered on the string in urls.py
@api_view(['GET'])
def getProduct(request, pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product == i
            break

    return Response(products)
