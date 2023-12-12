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
	return (
		<header className="header">
			<h1>{name}</h1>
			<h2>{title}</h2>
			<p>{description}</p>
		</header>
	);
};

export default Header;
