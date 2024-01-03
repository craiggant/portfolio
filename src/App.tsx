// components
import { ThreeCanvas } from './components';

// contexts
import { ColorThemeProvider } from './contexts';

// hooks
import { useSize } from './hooks';

// pages
import { Homepage, MobileHomepage } from './pages';

const App = () => {
	const { isSmallScreen } = useSize();

	if (isSmallScreen) {
		return (
			<>
				<ColorThemeProvider>
					<MobileHomepage />
				</ColorThemeProvider>
			</>
		);
	}

	return (
		<>
			<ColorThemeProvider>
				{/* <Homepage /> */}
				<ThreeCanvas />
			</ColorThemeProvider>
		</>
	);
};

export default App;
