from django.conf.urls import include, url
from . import views

urlpatterns = [
	url(r'^smarket/', views.vue, name="vue"),
	url(r'^ajax_inscription/', views.ajax_inscription, name="ajax_inscription")
]
