from django.db import models

# Create your models here.

class Util(models.Model):
	pseudo = models.CharField(max_length = 100)
	nom = models.CharField(max_length = 100)
	prenom = models.CharField(max_length = 100)
	age = models.IntegerField()
	presentation = models.TextField()


