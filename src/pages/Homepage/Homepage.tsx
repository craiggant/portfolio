// components
import { About, Card, ColorThemeSwitch, Header } from '../../components';

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
			<div className="homepage__right">
				<ColorThemeSwitch />
				<About />
				<div className="homepage__right-experiences">
					<Card></Card>
				</div>
			</div>
		</main>
	);
};

export default Homepage;
