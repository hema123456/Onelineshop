# Generated by Django 3.0.6 on 2020-07-03 16:24

import DjangoUeditor.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0002_auto_20200703_1614'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goods',
            name='goods_brief',
            field=models.TextField(default='none', max_length=500, verbose_name='商品简短描述'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='goods_desc',
            field=DjangoUeditor.models.UEditorField(default='none', verbose_name='商品详细描述'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='goods_sn',
            field=models.CharField(default='none', max_length=50, verbose_name='商品唯一货号'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='ship_free',
            field=models.BooleanField(default=False, verbose_name='是否承担运费'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='unit',
            field=models.CharField(choices=[(1, 'Piece'), (2, 'Meter'), (3, 'Roll')], default=1, max_length=10, verbose_name='单位'),
        ),
    ]