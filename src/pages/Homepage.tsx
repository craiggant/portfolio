// components
import { Header } from '../components';

// hooks
import { useSetColorTheme } from '../hooks';

const Homepage = () => {
	useSetColorTheme();

	return (
		<main>
			<Header
				name="Craig Gant"
				title="Software Engineer"
				description="Building beautiful and accessible web experiences"
			/>
		</main>
	);
};

export default Homepage;
