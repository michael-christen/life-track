import React from 'react';
import PropTypes from 'prop-types';


const Entry = ({ name }) => (
  <li>{name}</li>
);

Entry.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Entry;
