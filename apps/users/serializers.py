#!/usr/bin/env python
# -*- coding:utf-8 -*-
#    @Author:iSk2y
import re
from datetime import datetime, timedelta
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from users.models import VerifyCode
from django.contrib.auth import get_user_model

User = get_user_model()


# 邮箱正则表达式
REGEX_EMAIL = "^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$"


class SmsSerializer(serializers.Serializer):
    """
    注册提交邮箱序列化类
    """
    email = serializers.CharField(max_length=11)

    def validate_email(self, email):
        """
        自定义验证邮箱
        :return:
        """
        # 是否已经注册
        if User.objects.filter(email=email).count():
            raise serializers.ValidationError("邮箱已经存在")

        # 是否合法
        if not re.match(REGEX_EMAIL, email):
            raise serializers.ValidationError("邮箱非法")

        # 验证码发送频率
        # 60s内只能发送一次
        one_mintes_ago = datetime.now() - timedelta(hours=0, minutes=1, seconds=0)
        if VerifyCode.objects.filter(add_time__gt=one_mintes_ago, email=email).count():
            raise serializers.ValidationError("距离上一次发送未超过60s")

        return email


class UserRegSerializer(serializers.ModelSerializer):
    """
    用户注册序列化类
    """
    # UserProfile中没有code字段， 这里需要对应自定义一个code字段 否则会失败
    code = serializers.CharField(
        max_length=6, min_length=6, required=True, write_only=True,
         error_messages={
             "blank": "Please enter your verification code",
             "required": "Please enter your verification code",
             "max_length": "Format error of verification code",
             "min_length": "Format error of verification code"
         }, help_text="verification code"
    )
    # 验证用户名是否存在
    username = serializers.CharField(label='username', help_text='username', required=True, allow_blank=False,
                                     validators=[UniqueValidator(queryset=User.objects.all(), message="Username already exists")])

    password = serializers.CharField(style={'input_type': 'password'}, write_only=True, required=True, label='密码')

    # 密码加密保存
    def create(self, validated_data):
        user = super(UserRegSerializer, self).create(validated_data=validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user

    # 验证code
    def validate_code(self, code):
        # 用户注册，已post方式提交注册信息，post的数据都保存在initial_data里面
        # username就是用户注册的手机号，验证码按添加时间倒序排序，为了后面验证过期，错误等
        verify_records = VerifyCode.objects.filter(mobile=self.initial_data['username']).order_by("-add_time")

        if verify_records:
            # 最近的一个验证码
            last_record = verify_records[0]
            # 有效为5分钟
            five_minutes_ago = datetime.now() - timedelta(hours=0, minutes=5, seconds=0)
            if five_minutes_ago > last_record.add_time:
                raise serializers.ValidationError("验证码过期")

            if last_record.code != code:
                # 说明输入的验证码是错误的 和数据中匹配不上
                raise serializers.ValidationError("验证码错误")
        else:
            raise serializers.ValidationError("请确认账号")

    # def validate_username(self, mobile):
    #     # username前端传过来的就是mobile
    #     if not re.match(REGEX_MOBILE, mobile):
    #         raise serializers.ValidationError("手机号码非法")

    # 所有字段验证完后的方法 attrs是字段验证合法后返回的dict
    def validate(self, attrs):
        # 前端没有传mobile值到后端，这里添加进来
        attrs["mobile"] = attrs["username"]
        # code是自己添加得，数据库中并没有这个字段，验证完就删除掉
        del attrs["code"]
        return attrs

    class Meta:
        model = User
        fields = ('username', 'email', 'code', 'password')


class UserDetailSerializer(serializers.ModelSerializer):
    """
    用户详情序列化类
    """
    class Meta:
        model = User
        fields = ("name", "gender", "birthday", "email", "mobile")
