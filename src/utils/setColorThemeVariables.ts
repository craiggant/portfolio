import { TColorTheme } from '../types';

const themes = {
	light: {
		'--color-background': '#fff',
		'--color-text': '#000'
	},
	dark: {
		'--color-background': '#000',
		'--color-text': '#fff'
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
