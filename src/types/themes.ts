import { Dispatch } from 'react';

export type TColorTheme = 'dark' | 'light';

export type TColorThemeContext = {
	colorTheme: TColorTheme;
	setColorTheme: Dispatch<TColorTheme>;
};
