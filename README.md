# Life Track

A web-app to keep track of your day to day.

## Usage

* Startup the API via `pipenv run python manage.py runserver`, and start the
frontend with `npm run start`. You should be able to navigate to
`localhost:3000` and poke around.
* `/month/<year>/<month>` will show the month's days and any entries
associated with those days.

## To Do:

- [ ] Add Navigation to the MonthDisplay
- [ ] Connect MonthDisplay to entries
- [ ] Enable creation/modification of Summaries for day/month
- [ ] Enable creation/modification of entries for day
- [ ] Support week like the month


## Stretch Goal:

- Allow ordering on entries
- Possibly make different types of entities polymorphic
