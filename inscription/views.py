from django.shortcuts import render
from .models import *

def vue(request):
	return render(request,'index.html')


def ajax_inscription(request):
	return render(request,'index.html')
