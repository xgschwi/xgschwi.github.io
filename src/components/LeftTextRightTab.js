/* eslint-disable react/destructuring-assignment */
import React, { memo, useState, useEffect } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';

const LeftTextRightTab = (props) => {
	const [tab, setTab] = useState(0);
	const [content, setContent] = useState(React.Fragment);
	const { width } = useWindowDimensions();

	useEffect(() => {
		setContent(props.tabs[tab].tabContent);
	}, [tab]);

	return (
		<div
			className="container"
			style={{
				flexDirection: 'column',
				background: 'var(--forest)',
				color: 'white',
				opacity: '80%',
			}}
		>
			<div style={{ display: 'flex', width: '100%', overflow: 'hidden' }}>
				<span className="tabTitle" style={{ background: 'var(--marine)' }}>
					{props.title}
				</span>{' '}
				{/* Remove this and upper div to fix style */}
				<ul style={{ listStyle: 'none' }} className="tabListContainer">
					{props.tabs.map((t, idx) => (
						<li
							key={`tab${t.tabDisplay}`}
							className={`${tab === idx ? 'activeTab' : ''}`}
							style={{ background: 'var(--marine)' }}
						>
							<button
								onClick={() => setTab(idx)}
								type="button"
								className="strip-btn"
							>
								{width > 767 ? t.tabDisplay : idx}
							</button>
						</li>
					))}
				</ul>
			</div>
			<div className="tabDisplayContent">{content}</div>
		</div>
	);
};

export default memo(LeftTextRightTab);
