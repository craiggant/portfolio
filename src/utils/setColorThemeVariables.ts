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
		background: '#e0e0e0',
		border: '#fc5130',
		icon: '#fc5130',
		text: '#1e1e24',
		'box-shadow': '5px 5px 10px #bebebe, -5px -5px 10px #ffffff',
		'raised-box-shadow': '25px 25px 50px #bebebe, -25px -25px 50px #ffffff'
	},
	dark: {
		background: '#1e1e24',
		border: '#88527f',
		icon: '#88527f',
		text: '#e0e0e0',
		'box-shadow': '5px 5px 10px #0f0f12, -5px -5px 10px #2d2d36',
		'raised-box-shadow': '25px 25px 50px #0f0f12, -25px -25px 50px #2d2d36'
	}
};
const setColorThemeVariables = (theme: TColorTheme) => {
	const { style } = document.documentElement;
	const themeVariables = themes[theme];
	const altTheme = theme === 'light' ? 'dark' : 'light';
	const altThemeVariables = themes[altTheme];

	Object.entries(themeVariables).forEach(([key, value]) => {
		const altValue = altThemeVariables[key];
		style.setProperty(`--${key}`, value);
		style.setProperty(`--${key}-alt`, altValue);
	});
};

export default setColorThemeVariables;
