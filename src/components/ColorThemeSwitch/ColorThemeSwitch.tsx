// packages
import { useContext } from 'react';

// contexts
import { ColorThemeContext } from '../../contexts';

// components
import { AnimatedMoon, AnimatedSun } from '../index';

// styles
import './ColorThemeSwitch.scss';

const ColorThemeSwitch = () => {
	const { colorTheme, setColorTheme } = useContext(ColorThemeContext);

	const handleClick = () =>
		setColorTheme(colorTheme === 'dark' ? 'light' : 'dark');

	const themeIcon =
		colorTheme === 'dark' ? <AnimatedMoon /> : <AnimatedSun />;

	return (
		<a className="color-theme-switch" type="button" onClick={handleClick}>
			{themeIcon}
		</a>
	);
};

export default ColorThemeSwitch;
