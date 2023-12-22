// packages
import { useCallback, useContext } from 'react';

// contexts
import { ColorThemeContext } from '../contexts';

const useToggleColorTheme = () => {
	const { colorTheme, setColorTheme } = useContext(ColorThemeContext);

	const toggleColorTheme = useCallback(
		() => setColorTheme(colorTheme === 'dark' ? 'light' : 'dark'),
		[colorTheme, setColorTheme]
	);

	return { colorTheme, toggleColorTheme };
};

export default useToggleColorTheme;
