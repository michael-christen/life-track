import React from 'react';
import PropTypes from 'prop-types';


const Entry = (props) => {
  const percentage = 10;
  const margin = 0.5;
  const style = {
  	width: `${percentage}%`,
  	paddingBottom: `${percentage}%`,
  	margin: `${margin}%`,
    background: '#838',
  };
  return (
    <div className='square' style={style}>
      <img src={props.path} alt={`${props.title}: ${props.date}`}/>
    </div>
  );
};

Entry.propTypes = {
  title: PropTypes.string.isRequired,
  // TODO: Enforce Stricter constraints
  date: PropTypes.string.isRequired,
  // TODO: Separate into Link
  // TODO: Enforce url constraints
  path: PropTypes.string.isRequired,
  // Used to modify / link back
  // url: PropTypes.string.isRequired,
  // TODO: Add support for multiple users
  // owner: P
};

export default Entry;
