// packages
import { useContext, useEffect, useState } from 'react';

// contexts
import { ColorThemeContext } from '../contexts';

// utils
import { setColorThemeVariables } from '../utils';
import { TColorTheme } from '../types';

const useSetColorTheme = () => {
	const { colorTheme } = useContext(ColorThemeContext);
	const [currColorTheme, setCurrColorTheme] = useState<TColorTheme | null>(
		null
	);

	useEffect(() => {
		if (currColorTheme !== colorTheme) {
			setColorThemeVariables(colorTheme);
			setCurrColorTheme(colorTheme);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [colorTheme]);
};

export default useSetColorTheme;
