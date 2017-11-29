import React from 'react';
import PropTypes from 'prop-types';

import Entry from './Entry';

const EntryList = ({ entries }) => (
  <ul>
    {Object.keys(entries).map(key => (
      <Entry key={key} {...entries[key]} />
    ))}
  </ul>
);

EntryList.propTypes = {
  entries: PropTypes.objectOf(Entry),
}

export default EntryList;
