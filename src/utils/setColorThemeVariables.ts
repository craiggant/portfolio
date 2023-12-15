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
		background: '#F0F5F9',
		border: '#A0C0DD',
		icon: '#7895A2',
		text: '#485E69'
	},
	dark: {
		background: '#121212',
		border: '#282828',
		icon: '#b3b3b3',
		text: '#ffffff'
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
