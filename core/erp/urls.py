from django.urls import path
from core.erp.views.category.views import *

app_name = 'erp'

urlpatterns = [
    path('category/list/', CategoryListView.as_view(), name='category_list'),
    path('category/create/', CategoryCreateView.as_view(), name='category_create'),
    path('category/edit/<int:pk>/', CategoryUpdateView.as_view(), name='category_edit'),
    path('category/delete/<int:pk>/', CategoryDeleteView.as_view(), name='category_delete'),
]