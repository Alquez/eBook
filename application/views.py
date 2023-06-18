from rest_framework.viewsets import ModelViewSet
from application.models import ApplicationForm
from application.serializers import ApplicationFormSerializer


class ApplicationFormViewSet(ModelViewSet):
    serializer_class = ApplicationFormSerializer
    # permission_classes = [IsAuthenticated]
    queryset = ApplicationForm.objects.all()
