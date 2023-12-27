import { TColorTheme } from '../types';
// icon: '#fc5130',
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
		icon: '#88527f',
		text: '#1e1e24',
		'box-shadow':
			'.15rem .15rem .625rem #bebebe, -.15rem -.15rem .625rem #ffffff',
		'raised-box-shadow':
			'1rem 1rem 1.5rem #bebebe, -1rem -1rem 1.5rem #ffffff',
		'inset-box-shadow':
			'inset .15rem .15rem .625rem #bebebe, inset -.15rem -.15rem .625rem #ffffff'
	},
	dark: {
		background: '#1e1e24',
		border: '#88527f',
		icon: '#88527f',
		text: '#e0e0e0',
		'box-shadow':
			'.15rem .15rem .625rem #0f0f12, -.15rem -.15rem .625rem #2d2d36',
		'raised-box-shadow':
			'1rem 1rem 1.5rem #0f0f12, -1rem -1rem 1.5rem #2d2d36',
		'inset-box-shadow':
			'inset .15rem .15rem .625rem #0f0f12, inset -.15rem -.15rem .625rem #2d2d36'
	}
};

// started with .325rem box shadow, but it was too much?

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
