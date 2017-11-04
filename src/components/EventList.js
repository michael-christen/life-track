import React from 'react';
import PropTypes from 'prop-types';

import Event from './Event';

const EventList = ({ events }) => (
  <ul>
    {Object.keys(events).map(key => (
      <Event {...events[key]} />
    ))}
  </ul>
);

EventList.propTypes = {
  events: PropTypes.objectOf(Event),
}

export default EventList;
