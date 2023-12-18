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

const removeTransitionVariables = (style: CSSStyleDeclaration) => {
	if (!style) return;

	style.removeProperty('--box-shadow-transition');
};

// function for setting transition variables individually so that the transitions don't cause a color flash on theme switch (called after setColorThemeVariables in context provider)
const setTransitionVariables = (style: CSSStyleDeclaration) => {
	if (!style) return;
	// setTimeout is used to delay the transition until after the theme change has been rendered
	setTimeout(() => {
		style.setProperty(
			'--box-shadow-transition',
			'box-shadow 0.3s ease-in-out'
		);
	}, 300);
};

const setColorThemeVariables = (theme: TColorTheme) => {
	const { style } = document.documentElement;
	const themeVariables = themes[theme];
	const altTheme = theme === 'light' ? 'dark' : 'light';
	const altThemeVariables = themes[altTheme];

	removeTransitionVariables(style);

	Object.entries(themeVariables).forEach(([key, value]) => {
		const altValue = altThemeVariables[key];
		style.setProperty(`--${key}`, value);
		style.setProperty(`--${key}-alt`, altValue);
	});

	setTransitionVariables(style);
};

export default setColorThemeVariables;
