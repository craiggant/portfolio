// packages
import { useContext } from 'react';

// contexts
import { ColorThemeContext } from '../../contexts';

const ColorThemeSwitch = () => {
	const { colorTheme, setColorTheme } = useContext(ColorThemeContext);

	const handleClick = () =>
		setColorTheme(colorTheme === 'dark' ? 'light' : 'dark');

	return <button onClick={handleClick}>Set Color Theme</button>;
};

export default ColorThemeSwitch;
