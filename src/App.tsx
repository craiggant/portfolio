// contexts
import { ColorThemeProvider } from './contexts';

// hooks
import { useSize } from './hooks';

// pages
import { Homepage, MobileHomepage } from './pages';

const App = () => {
	const { isMobile } = useSize();

	if (isMobile) {
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
				<Homepage />
			</ColorThemeProvider>
		</>
	);
};

export default App;
