import { ColorThemeSwitch, Footer, Navigation } from '../../components';

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
		<div className="header">
			<header>
				<h1>{name}</h1>
				<h2>{title}</h2>
				<p>{description}</p>
				<Navigation />
				<div>
					<ColorThemeSwitch />
				</div>
			</header>
			<Footer />
		</div>
	);
};

export default Header;
