import React from 'react';
import PropTypes from 'prop-types';

import { getDayOfWeek } from '../utils/DateUtils';

import '../App.css';


const MonthDisplay = (props) => {
  const begin = new Date(props.year, props.month, 1);
  const end = new Date(props.year, props.month + 1, 0);
  const numDays = end.getDate();
  const dayOffset = getDayOfWeek(begin);
  console.log(begin);
  console.log(end);
  console.log(dayOffset);
  let blocks = [];
  const width = 7;  // 7 Days in a week
  for (let i = 0; i < dayOffset; ++i) {
    const rawPercentage = 100.0 / width;
    const margin = rawPercentage / 20.0;
    const percentage = rawPercentage - (2 * margin);
    const style = {
      width: `${percentage}%`,
      paddingBottom: `${percentage}%`,
      margin: `${margin}%`,
      visibility: 'hidden',
    };
    blocks.push(<div className='square' style={style}></div>);
  }
  for (let i = 1; i <= numDays; ++i) {
    const rawPercentage = 100.0 / width;
    const margin = rawPercentage / 20.0;
    const percentage = rawPercentage - (2 * margin);
    const style = {
      width: `${percentage}%`,
      paddingBottom: `${percentage}%`,
      margin: `${margin}%`,
    };
    blocks.push(
        <div className='square' style={style}>
          <p style={{position: 'absolute', color: 'white', top: '50%', left: '50%'}}>{i}</p>
        </div>);
  }
  return (
    <div>{blocks}</div>
  );
};

MonthDisplay.propTypes = {
  // TODO: Enforce Stricter constraints
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default MonthDisplay;
