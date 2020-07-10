# Generated by Django 3.0.6 on 2020-07-03 18:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0004_auto_20200703_1625'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='goods',
            name='price',
        ),
        migrations.AddField(
            model_name='goods',
            name='max_unit_price',
            field=models.FloatField(default=0, verbose_name='最大单价'),
        ),
        migrations.AddField(
            model_name='goods',
            name='min_unit_price',
            field=models.FloatField(default=0, verbose_name='最小单价'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='unit',
            field=models.IntegerField(choices=[(1, 'Piece'), (2, 'Meter'), (3, 'Roll')], default=1, verbose_name='单位'),
        ),
    ]