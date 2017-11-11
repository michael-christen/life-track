# Notes

## Ordering a ManyToManyField

- Recommended [course of action](https://docs.djangoproject.com/en/1.11/topics/db/models/#extra-fields-on-many-to-many-relationships)
involves creating a custom [through](https://docs.djangoproject.com/en/1.11/ref/models/fields/#django.db.models.ManyToManyField.through)
table, but then you lose all of those nice functions like `add`, `create`, or `set`.


## Polymorphism for Similar Models

- [Abstract Models](https://docs.djangoproject.com/en/1.11/topics/db/models/#abstract-base-classes)
- Model Inheritance: Create multiple implicit `OneToOneField`s. [Blog post](https://godjango.com/blog/django-abstract-base-class-multi-table-inheritance/)
- [django-typed-models](https://github.com/craigds/django-typed-models)
- [django-polymorphic](https://github.com/django-polymorphic/django-polymorphic)

## Create React App & Django

- [Using CORS & Production Settings](https://www.fusionbox.com/blog/detail/create-react-app-and-django/624/)
- [Authentication](https://github.com/geezhawk/django-react-auth)
- [Authentication Article](http://geezhawk.github.io/user-authentication-with-react-and-django-rest-framework)
