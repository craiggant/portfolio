// types
import { TColorTheme } from '../types';

const getInitialColorTheme = () => {
	const persistedColorPreference = window.localStorage.getItem(
		'color-theme'
	) as TColorTheme | null;

	if (persistedColorPreference) return persistedColorPreference;

	// check for a dark mode preference in the media query
	const mql = window.matchMedia('(prefers-color-scheme: dark)');
	const { matches: prefersDarkMode } = mql;

	if (prefersDarkMode) return 'dark';

	// default to 'light'.
	return 'light';
};

export default getInitialColorTheme;
