// contexts
import { ColorThemeProvider } from './contexts';

// components
import { Header } from './components';

const App = () => {
	return (
		<>
			<ColorThemeProvider>
				<Header
					name="Craig Gant"
					title="Software Engineer"
					description="Building beautiful and accessible web experiences"
				/>
			</ColorThemeProvider>
		</>
	);
};

export default App;
