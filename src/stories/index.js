import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Entry from '../components/Entry';
import RangeDisplay from '../components/RangeDisplay';
import MonthDisplay from '../components/MonthDisplay';
import ActivityTable from '../components/ActivityTable';

storiesOf('Entry', module)
  .add('with just name', () =>
        <Entry
          title='Entry Name'
          date='2017-01-01'
          path='/path.png'
          onClick={action('clicked')}>
        </Entry>);


// TODO: Set begin and end properly
// storiesOf('RangeDisplay', module)
//   .add('with basics', () => <RangeDisplay begin={new Date(2017, 0, 1)} end={new Date(2017, 0, 31)}></RangeDisplay>);

storiesOf('MonthDisplay', module)
  .add('January 2017', () => <MonthDisplay year={2017} month={0}></MonthDisplay>)
  .add('February 2017', () => <MonthDisplay year={2017} month={1}></MonthDisplay>);


const activities = [
    {
        "type": "self-balancing-robot",
        "role": "Personal",
        "category": "",
        "sub_category": "",
        "project": "",
        "start": new Date("2018-10-31T16:45:00Z"),
        "end": new Date("2018-10-31T17:15:00Z"),
    },
    {
        "type": "Website Cleanup",
        "role": "Work",
        "category": "",
        "sub_category": "",
        "project": "",
        "start": new Date("2018-10-31T18:15:00Z"),
        "end": new Date("2018-10-31T18:35:38Z")
    },
    {
        "type": "Documentation",
        "role": "Work",
        "category": "",
        "sub_category": "",
        "project": "",
        "start": new Date("2018-10-31T18:35:00Z"),
        "end": new Date("2018-10-31T18:51:16Z")
    },
    {
        "type": "Tools",
        "role": "Work",
        "category": "",
        "sub_category": "",
        "project": "",
        "start": new Date("2018-10-31T18:55:00Z"),
        "end": new Date("2018-10-31T19:47:16Z")
    },
];

storiesOf('Activities', module)
  .add('Table', () => <ActivityTable activities={activities}></ActivityTable>);
