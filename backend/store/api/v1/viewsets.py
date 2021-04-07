from rest_framework import authentication
from store.models import Product
from .serializers import ProductSerializer
from rest_framework import viewsets


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Product.objects.all()
