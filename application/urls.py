from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ApplicationFormViewSet


router = DefaultRouter()
router.register('application', ApplicationFormViewSet)

urlpatterns = [
    ]
urlpatterns += router.urls
