# coding:utf-8

from django.http import HttpResponse
from django.core.mail import EmailMultiAlternatives
from users.models import UserProfile, VerifyCode
from random import Random


def create_verfication_code(random_length=8):
    str = ''
    # 生成字符串的可选字符串
    chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
    length = len(chars) - 1
    random = Random()
    for i in range(random_length):
        str += chars[random.randint(0, length)]
    return str


def send_verification_code(purpose='register'):
    title, from_email, to = 'hello', 'from@example.com', 'to@example.com'
    text_content = 'This is an important message.'
    html_content = '<p>This is an <strong>important</strong> message.</p>'
    msg = EmailMultiAlternatives(title, text_content, from_email, [to])
    msg.attach_alternative(html_content, "text/html")
    msg.content_subtype = 'html'
    result = msg.send()
    return HttpResponse(result)


def verify_verification_code():
    pass
