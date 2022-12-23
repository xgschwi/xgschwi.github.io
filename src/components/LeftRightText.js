import React from 'react';

function LeftRightText({ left, right }) {
	return (
		<div className="lrcontainer">
			<div className="leftContent">{left}</div>
			<div className="middle" />
			<div className="rightContent">{right}</div>
		</div>
	);
}

export default LeftRightText;
