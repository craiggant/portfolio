import { TColorTheme } from '../types';
// icon: '#fc5130',
type TThemeValue = {
	background: string;
	border: string;
	icon: string;
	text: string;
	[key: string]: string;
};

// const themes: Record<TColorTheme, TThemeValue> = {
// 	light: {
// 		background: '#e0e0e0',
// 		border: '#fc5130',
// 		icon: '#88527f',
// 		text: '#1e1e24',
// 		'box-shadow':
// 			'.15rem .15rem .625rem #bebebe, -.15rem -.15rem .625rem #ffffff',
// 		'raised-box-shadow':
// 			'1rem 1rem 1.5rem #bebebe, -1rem -1rem 1.5rem #ffffff',
// 		'inset-box-shadow':
// 			'inset .15rem .15rem .625rem #bebebe, inset -.15rem -.15rem .625rem #ffffff'
// 	},
// 	dark: {
// 		background: '#1e1e24',
// 		border: '#88527f',
// 		icon: '#88527f',
// 		text: '#e0e0e0',
// 		'box-shadow':
// 			'.15rem .15rem .625rem #0f0f12, -.15rem -.15rem .625rem #2d2d36',
// 		'raised-box-shadow':
// 			'1rem 1rem 1.5rem #0f0f12, -1rem -1rem 1.5rem #2d2d36',
// 		'inset-box-shadow':
// 			'inset .15rem .15rem .625rem #0f0f12, inset -.15rem -.15rem .625rem #2d2d36'
// 	}
// };

const themes: Record<TColorTheme, TThemeValue> = {
	// light: {
	// 	background: '#F0ECE2',
	// 	border: '#DAD2C8',
	// 	icon: '#707070',
	// 	text: '#404040',
	// 	'box-shadow': '0px 4px 8px rgba(0, 0, 0, 0.12)',
	// 	'raised-box-shadow': '0px 4px 8px rgba(0, 0, 0, 0.25)',
	// 	'inset-box-shadow': 'inset 0px 2px 4px rgba(0, 0, 0, 0.15)'
	// },
	light: {
		background: 'rgba(240, 236, 226, 0.5)',
		border: 'rgba(218, 210, 200, 0.5)',
		icon: '#707070',
		text: '#404040',
		'box-shadow': '0px 8px 24px rgba(0, 0, 0, 0.2)',
		'backdrop-filter': 'blur(10px)' // Applying blur effect
	},
	dark: {
		background: '#2B2B2B',
		border: '#474747',
		icon: '#A0A0A0',
		text: '#D6D6D6',
		'box-shadow': '0px 4px 8px rgba(0, 0, 0, 0.6)',
		'raised-box-shadow': '0px 4px 8px rgba(255, 255, 255, 0.15)',
		'inset-box-shadow': 'inset 0px 2px 4px rgba(0, 0, 0, 0.5)'
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
