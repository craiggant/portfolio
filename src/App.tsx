// contexts
import { ColorThemeProvider } from './contexts';

// pages
import { Homepage } from './pages';

const App = () => {
	return (
		<>
			<ColorThemeProvider>
				<Homepage />
			</ColorThemeProvider>
		</>
	);
};

export default App;
