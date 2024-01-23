// components
import { Suspense } from 'react';
import { ThreeCanvas } from './components';
import { Spinner } from './components/Widgets';

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

	if (window.location.hostname.includes('portfolio')) {
		return (
			<>
				<ColorThemeProvider>
					<Homepage />
				</ColorThemeProvider>
			</>
		);
	}

	return (
		<Suspense fallback={<Spinner />}>
			<ColorThemeProvider>
				<ThreeCanvas />
			</ColorThemeProvider>
		</Suspense>
	);
};

export default App;
