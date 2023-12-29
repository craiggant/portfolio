import { ColorThemeSwitch, Footer } from '../../components';

// styles
import './MobileHeader.scss';

type THeaderProps = {
	/** Name */
	name: string;
	/** Job title */
	title: string;
	/** Short, elevator pitch description */
	description: string;
};

/** Header that displays key details about the developer */

const MobileHeader = ({ name, title, description }: THeaderProps) => {
	return (
		<div className="mobile-header">
			<ColorThemeSwitch />
			<header>
				<h1>{name}</h1>
				<h2>{title}</h2>
				<p>{description}</p>
			</header>
			<Footer />
		</div>
	);
};

export default MobileHeader;
