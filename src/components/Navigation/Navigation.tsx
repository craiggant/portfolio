import React, { MouseEvent, useEffect, useState } from 'react';

// components
import NavButton from '../NavButton/NavButton';

// styles
import './Navigation.scss';

const Navigation = () => {
	const [selected, setSelected] = useState('');

	const sections = ['About', 'Experience', 'Projects'];

	const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
		const { innerText: selection } = e.currentTarget;
		setSelected(selection);
	};

	const buttonsToDisplay = sections.map((section) => (
		<NavButton
			key={section}
			onClick={handleClick}
			selected={selected}
			text={section}
		/>
	));

	return <div className="navigation">{buttonsToDisplay}</div>;
};

export default Navigation;
