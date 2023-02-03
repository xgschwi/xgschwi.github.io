/* eslint-disable react/destructuring-assignment */
import React, { memo, useState, useEffect } from 'react';
// import useWindowDimensions from '../hooks/useWindowDimensions';

const LeftTextRightTab = (props) => {
	const [tab, setTab] = useState(0);
	const [content, setContent] = useState(React.Fragment);
	// const { width } = useWindowDimensions();

	useEffect(() => {
		setContent(props.tabs[tab].tabContent);
	}, [tab]);
	// width: 85%;
	// display: flex;
	// gap: 20px;
	// padding: 0px 0px 10px 0px;
	// height: 50vh;
	// margin: auto;
	// box-shadow: 0 0 5px rgb(0 0 0 / 50%);
	// border-radius: 10px;
	// align-items: center;
	// max-width: 900px;
	// overflow: hidden;
	return (
		<div
			className="md:container text-white opacity-80 bg-[var(--forest)] flex-col w-full flex gap-5 mb-20 min-h-[65vh] max-h-[65vh] sm:min-h-[50vh] sm:max-h-[50vh] m-auto rounded-md align-middle shadow-[0 0 5px rgb(0 0 0 / 50%)] overflow-auto "
			// style={{
			// 	flexDirection: 'column',
			// 	background: 'var(--forest)',
			// 	color: 'white',
			// 	opacity: '80%',
			// }}
		>
			<div className="flex w-full overflow-visible sm:overflow-hidden">
				<ul
					style={{ listStyle: 'none' }}
					className="flex ml-auto mt-0 w-fit overflow-x-auto scrollbar"
				>
					{props.tabs.map((t, idx) => (
						<li
							key={`tab${t.tabDisplay}`}
							className={`${
								tab === idx
									? 'font-bold shadow-[0px_2px_3px_rgb(87_188_144_/_50%)] border-[var(--feather)] border-2'
									: ''
							} p-2 h-[90%] items-center flex text-base font-semibold bg-[var(--marine)] 
							shadow-[0_2px_3px_rgb(256_256_256/_50%)] rounded-[0_0_2px_2px] 
							hover:font-extrabold hover:shadow-[0px_2px_3px_rgb(87_188_144_/_50%)]
							first:rounded-[0px_0px_0px_10px] min-w-[230px]`}
						>
							<button
								onClick={() => setTab(idx)}
								type="button"
								className="strip-btn"
							>
								{t.tabDisplay}
							</button>
						</li>
					))}
				</ul>
			</div>
			{content}
		</div>
	);
};

export default memo(LeftTextRightTab);
