from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer


routes =[
    'api/v1/products/',
    'api/v1/products/create',
    'api/v1/products/upload/',
    'api/v1/products/<id>/reviews/',
    'api/v1/products/top/',
    'api/v1/products/<id>/',
    'api/v1/products/delete/<id>/',
    'api/v1/products/<update>/<id>/',

]



@api_view(http_method_names=['Get'])
def getRoutes(request):
    return Response(routes)

@api_view(http_method_names=['Get'])
def getProducts(request):
    products=Product.objects.all()
    serializer=ProductSerializer(products,many=True)
    return Response(serializer.data)

@api_view(http_method_names=['Get'])
def getProduct(request,pk):
    product=Product.objects.get(_id=pk)
    serializer=ProductSerializer(product,many=False)
    return Response(serializer.data)
