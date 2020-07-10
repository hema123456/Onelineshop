"""Onelineshop URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from rest_framework import routers
from django.urls import path
from django.conf.urls import include
import xadmin
from goods import views as gview
from users import views as uview
from user_operation import views as uoview
from trade import views as tview
from rest_framework.documentation import include_docs_urls

API_TITLE = 'API title'
API_DESCRIPTION = '...'
router = routers.DefaultRouter()
router.register(r'categorys', gview.CategoryViewSet, basename="categorys")
router.register(r'goods', gview.GoodsListViewSet, basename='goods')
router.register(r'users', uview.UserViewSet, basename='users')

# # 用户留言
# router.register(r'messages', uoview.LeavingMessageViewset, basename='messages')
#
# # 配置购物车URL
# router.register(r'shopcarts', tview.ShoppingCartViewset, basename="shopcarts")

# # 订单url
# router.register(r'orders', tview.OrderViewset, basename="orders")
#
# # 轮播商品URL
# router.register(r'banners', gview.BannerViewset, basename="banners")


urlpatterns = [
    path('', include(router.urls)),
    path('xadmin/', xadmin.site.urls),
    path('ueditor/', include('DjangoUeditor.urls')),
    path('docs/', include_docs_urls(title=API_TITLE, description=API_DESCRIPTION))
]
