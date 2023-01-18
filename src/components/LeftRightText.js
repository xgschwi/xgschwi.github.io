import React from 'react';

const LeftRightText = ({ left, right }) => (
	<div className="lrcontainer">
		<div className="leftContent">{left}</div>
		<div className="middle" />
		<div className="rightContent">{right}</div>
	</div>
);

export default LeftRightText;
