from django.conf import settings
from django.db import models


class Product(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=100,
    )
    price = models.DecimalField(
        max_digits=5,
        decimal_places=2,
    )
    quantity = models.IntegerField()


# Create your models here.
