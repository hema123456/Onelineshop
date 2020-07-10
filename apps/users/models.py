from datetime import datetime

from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class UserProfile(AbstractUser):
    """
    自定义用户表
    """
    GENDER_CHOICES = (
        ("male", "男"),
        ("female", "女")
    )
    # 用户用手机注册，所以姓名，生日和邮箱可以为空
    email = models.EmailField("邮箱", max_length=100)
    name = models.CharField("姓名", max_length=30, null=True, blank=True)
    birthday = models.DateField("出生年月", null=True, blank=True)
    gender = models.CharField("性别", max_length=6, choices=GENDER_CHOICES, default="female")
    mobile = models.CharField("电话", max_length=11, blank=True)

    class Meta:
        verbose_name = '用户'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.username


class VerifyCode(models.Model):
    """
    验证码
    """
    PURPOSE_CHOICES = (
        (0, "保留字段"),
        (1, "用户注册"),
        (2, "修改密码"),
        (3, "找回密码"),
    )
    email = models.EmailField("邮箱", max_length=100)
    code = models.CharField("验证码", max_length=10)
    purpose = models.CharField("操作类型", max_length=6, choices=PURPOSE_CHOICES, default="female")
    add_time = models.DateTimeField("创建时间", default= datetime.now)
    expire = models.IntegerField("有效时间",default= 60)

    class Meta:
        verbose_name = "验证码"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.code