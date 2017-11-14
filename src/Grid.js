import React from 'react';


const Grid = (props) => {
	let blocks = [];
	for (let i = 0; i < props.width * props.height; i += 1) {
		const rawPercentage = 100.0 / props.width;
		const margin = rawPercentage / 20.0;
		const percentage = rawPercentage - (2 * margin);
		const style = {
			width: `${percentage}%`,
			paddingBottom: `${percentage}%`,
			margin: `${margin}%`,
		};
		blocks.push(<div className='square' style={style}>
          <img src="https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/23498153_1869512336695645_9040460074186702848_n.jpg"/>
          <div className='rating'></div>
        </div>);
	}
	return (
	  <div>
		{blocks}
		</div>
	);
};

export default Grid;

/*
 * Week(day): Width 7, height 1
 * Month(day): Width 1-7, height 4-5
 * Month(week): Width 4-5, height 1
 * Year(day): Calendar view
 * Year(week): Grouped by month
 */
