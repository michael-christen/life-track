import React from 'react';
import PropTypes from 'prop-types';


const Summary = (props) => {
  return (
    <div className='square' style={style}>
    </div>
  );
};

Summary.propTypes = {
  title: PropTypes.string.isRequired,
  // TODO: Enforce Stricter constraints
  begin: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,

  // TODO: Enforce url constraints
  // Used to modify / link back
  url: PropTypes.string.isRequired,

  description: PropTypes.string,
  // TODO: Add support for multiple users
  // owner: P
};

export default Summary;
