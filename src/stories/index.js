import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Entry from '../components/Entry';

storiesOf('Entry', module)
  .add('with just name', () => <Entry name='Entry Name' onClick={action('clicked')}></Entry>);
