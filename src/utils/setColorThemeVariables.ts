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
		background: '#CADBE9', // Soft blue-gray
		border: '#FF6B6B', // Vibrant coral
		icon: '#5C7A95', // Deeper shade of blue-gray
		text: '#333333', // Dark gray
		'box-shadow':
			'.15rem .15rem .625rem #9AAFC1, -.15rem -.15rem .625rem #E4F0FA',
		'raised-box-shadow':
			'1rem 1rem 1.5rem #9AAFC1, -1rem -1rem 1.5rem #E4F0FA',
		'inset-box-shadow':
			'inset .15rem .15rem .625rem #9AAFC1, inset -.15rem -.15rem .625rem #E4F0FA'
	},
	dark: {
		background: '#2C3E50', // Dark slate
		border: '#B38E8E', // Muted coral
		icon: '#405C73', // Lighter shade of dark slate
		text: '#D0D3D4', // Light gray
		'box-shadow':
			'.15rem .15rem .625rem #1B2838, -.15rem -.15rem .625rem #3D5668',
		'raised-box-shadow':
			'1rem 1rem 1.5rem #1B2838, -1rem -1rem 1.5rem #3D5668',
		'inset-box-shadow':
			'inset .15rem .15rem .625rem #1B2838, inset -.15rem -.15rem .625rem #3D5668'
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
