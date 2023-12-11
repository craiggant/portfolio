type THeaderProps = {
	/** Name */
	name: string;
	/** Job title */
	title: string;
	/** Short, elevator description */
	description: string;
};

/** Header that displays key details */
const Header = ({ name, title, description }: THeaderProps) => {
	return (
		<header>
			<h1>{name}</h1>
			<h2>{title}</h2>
			<p>{description}</p>
		</header>
	);
};

export default Header;
