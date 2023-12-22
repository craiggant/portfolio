import React from 'react';

// styles
import './NavButton.scss';

type TNavButtonProps = {
	// optional click handler
	onClick?: (e: any) => void;
	// currently selected button
	selected: string;
	// text that the button should display
	text: string;
};

const NavButton = ({ onClick, selected, text }: TNavButtonProps) => {
	const classNames = `nav-button ${selected === text ? 'nav-selected' : ''}`;

	return (
		<a
			className={classNames}
			href={`#${text.toLowerCase()}`}
			onClick={onClick}
			type="button"
		>
			{text}
		</a>
	);
};

export default NavButton;
