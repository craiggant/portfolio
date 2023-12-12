// components
import { Header } from '../../components';

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
		</main>
	);
};

export default Homepage;
