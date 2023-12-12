// packages
import { createContext, useState } from 'react';

// utils
import { getInitialColorTheme } from '../utils';

// types
import { TChildren, TColorTheme, TColorThemeContext } from '../types';

export const ColorThemeContext = createContext<TColorThemeContext>({
	colorTheme: 'light',
	setColorTheme: () => {}
});

export const ColorThemeProvider = ({ children }: TChildren) => {
	const [theme, setTheme] = useState(getInitialColorTheme);

	const setColorTheme = (theme: TColorTheme) => {
		setTheme(theme);
		// persist setting to localStorage
		localStorage.setItem('color-theme', theme);
	};

	return (
		<ColorThemeContext.Provider
			value={{ colorTheme: theme, setColorTheme }}
		>
			{children}
		</ColorThemeContext.Provider>
	);
};
