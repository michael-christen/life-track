import React from 'react';
import PropTypes from 'prop-types';

import { getDayOfWeek } from '../utils/DateUtils';


const RangeDisplay = (props) => {
  const dayOffset = getDayOfWeek(props.begin);
  return (
    <div className='square'>
    HI
    </div>
  );
};

RangeDisplay.propTypes = {
  // TODO: Enforce Stricter constraints
  begin: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,

  granularity: PropTypes.string.isRequired,
};

export default RangeDisplay;
