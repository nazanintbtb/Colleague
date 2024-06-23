from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Product(models.Model):
    _id= models.AutoField(primary_key=True , editable= False)
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    name = models.CharField(max_length=200, null=True)
    category= models.CharField(max_length=200, null=True)
    description =models.TextField(null=True, blank=True)
    image=models.ImageField(null=True, blank=True)
    rating= models.DecimalField(max_digits=3, decimal_places=2,null=True, blank=True)
    price =models.DecimalField(max_digits=9, decimal_places=2,null=True, blank=True)
    numRevies=models.IntegerField(null=True,blank=True,default=0)
    countInStock=models.IntegerField(null=True,blank=True,default=0)
    created_at=models.DateTimeField(auto_now_add=True)
    update_at=models.DateTimeField(auto_now_add=True)
    finish= models.BooleanField(default=True)

    def __str__(self):
        return self.name

class Review(models.Model):
    _id=models.AutoField(primary_key=True , editable= False)
    product=models.ForeignKey(Product,on_delete=models.SET_NULL,null=True)
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    name=models.CharField(max_length=200,null=True,blank=True)
    rating=models.IntegerField(null=True,blank=True, default=0)
    comment=models.TextField(null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.rating)



class Order(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentmethod=models.CharField(max_length=200,null=True, blank=True)
    taxtPrice=models.DecimalField(max_digits=7, decimal_places=2,null=True, blank=True)
    shippingPrice=models.DecimalField(max_digits=7, decimal_places=2,null=True, blank=True)
    totalPrice=models.DecimalField(max_digits=9, decimal_places=2,null=True, blank=True)
    isPaid=models.BooleanField(default=False)
    paid_at=models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered=models.BooleanField(default=False)
    delivered_at=models.DateTimeField(auto_now_add=False, null=True, blank=True)
    created_at=models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.created_at)

class OrderItem(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order=models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name=models.CharField(max_length=200,null=True,blank=True)
    qty=models.IntegerField(null=True, blank=True, default=0)
    price=models.DecimalField(max_digits=9, decimal_places=2,null=True, blank=True)
    image=models.CharField(max_length=200,null=True,blank=True)
    def __str__(self):
        return str(self.name)

class ShippingAddress(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True , blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    postalcode = models.CharField(max_length=200, null=True, blank=True)
    pilaque=models.CharField(max_length=200, null=True, blank=True)
    shippingPrice=models.DecimalField(max_digits=7, decimal_places=2,null=True, blank=True)

    def __str__(self):
        return str(self.address)




