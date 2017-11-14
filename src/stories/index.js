import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Entry from '../components/Entry';
import RangeDisplay from '../components/RangeDisplay';
import MonthDisplay from '../components/MonthDisplay';

storiesOf('Entry', module)
  .add('with just name', () => <Entry name='Entry Name' onClick={action('clicked')}></Entry>);

storiesOf('RangeDisplay', module)
  .add('with basics', () => <RangeDisplay begin={new Date(2017, 0, 1)} end={new Date(2017, 0, 31)}></RangeDisplay>);

storiesOf('MonthDisplay', module)
  .add('January 2017', () => <MonthDisplay year={2017} month={0}></MonthDisplay>)
  .add('February 2017', () => <MonthDisplay year={2017} month={1}></MonthDisplay>);
