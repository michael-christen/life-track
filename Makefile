run:
	honcho -f Procfile.dev start

story:
	npm run storybook

test:
	pipenv run python manage.py test
