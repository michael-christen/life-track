import React from 'react';
import PropTypes from 'prop-types';


const Event = ({ name }) => (
  <li>{name}</li>
);

Event.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Event;
