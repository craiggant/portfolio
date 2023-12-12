import { TColorTheme } from '../types';

const themes = {
	light: {
		'--color-background': '#fff',
		'--color-border': '#000',
		'--color-icon': '#fff222',
		'--color-text': '#000'
	},
	dark: {
		'--color-background': '#3F3F3F',
		'--color-border': '#fff',
		'--color-icon': '#aebebd',
		'--color-text': '#88C8CB'
	}
};

const setColorThemeVariables = (theme: TColorTheme) => {
	const { style } = document.documentElement;
	const themeVariables = themes[theme];

	Object.entries(themeVariables).forEach(([key, value]) => {
		style.setProperty(key, value);
	});
};

export default setColorThemeVariables;
