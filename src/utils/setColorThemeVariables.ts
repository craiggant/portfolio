import { TColorTheme } from '../types';

type TThemeValue = {
	background: string;
	border: string;
	icon: string;
	text: string;
	[key: string]: string;
};

const themes: Record<TColorTheme, TThemeValue> = {
	light: {
		background: '#EAE2B7',
		border: '#003049',
		icon: '#003049',
		text: '#003049'
	},
	dark: {
		background: '#003049',
		border: '#EAE2B7',
		icon: '#EAE2B7',
		text: '#EAE2B7'
	}
};

const setColorThemeVariables = (theme: TColorTheme) => {
	const { style } = document.documentElement;
	const themeVariables = themes[theme];
	const altTheme = theme === 'light' ? 'dark' : 'light';
	const altThemeVariables = themes[altTheme];

	Object.entries(themeVariables).forEach(([key, value]) => {
		const altValue = altThemeVariables[key];
		style.setProperty(`--color-${key}`, value);
		style.setProperty(`--color-${key}-alt`, altValue);
	});
};

export default setColorThemeVariables;
