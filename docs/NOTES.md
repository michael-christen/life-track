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

## Testing Redux

- [Testing Components that use Redux](https://hackernoon.com/how-to-snapshot-test-everything-in-your-redux-app-with-jest-fde305ebedea)
- [Jest & Enzyme for Redux](https://medium.com/netscape/testing-a-react-redux-app-using-jest-and-enzyme-b349324803a9)
- [Testing Redux Foundations](https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md)
using [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store) and
[fetch-mock](http://www.wheresrhys.co.uk/fetch-mock/).
- [Testing Redux Step-by-Step](https://hackernoon.com/redux-testing-step-by-step-a-simple-methodology-for-testing-business-logic-8901670756ce)
