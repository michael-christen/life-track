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
		blocks.push(<div className='square' style={style}></div>);
	}
	return (
	  <div>
		{blocks}
		</div>
	);
};

export default Grid;
