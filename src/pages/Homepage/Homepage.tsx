// components
import { ColorThemeSwitch, Header } from '../../components';

// hooks
import { useSetColorTheme } from '../../hooks';

// styles
import './Homepage.scss';

const Homepage = () => {
	useSetColorTheme();

	return (
		<main className="homepage">
			<Header
				name="Craig Gant"
				title="Software Engineer"
				description="Building beautiful and accessible web experiences"
			/>
			<ColorThemeSwitch />
		</main>
	);
};

export default Homepage;
