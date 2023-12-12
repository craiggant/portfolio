// packages
import { useContext } from 'react';

// contexts
import { ColorThemeContext } from '../../contexts';

// styles
import './Header.scss';

type THeaderProps = {
	/** Name */
	name: string;
	/** Job title */
	title: string;
	/** Short, elevator pitch description */
	description: string;
};

/** Header that displays key details about the developer */

const Header = ({ name, title, description }: THeaderProps) => {
	const { colorTheme } = useContext(ColorThemeContext);
	console.log(colorTheme);
	return (
		<header className="header">
			<h1>{name}</h1>
			<h2>{title}</h2>
			<p>{description}</p>
		</header>
	);
};

export default Header;
