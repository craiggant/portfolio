// hooks
import { useToggleColorTheme } from '../../hooks';
// components
import { AnimatedMoon, AnimatedSun } from '../index';

// styles
import './ColorThemeSwitch.scss';

const ColorThemeSwitch = () => {
	const { colorTheme, toggleColorTheme } = useToggleColorTheme();

	const themeIcon =
		colorTheme === 'dark' ? (
			<AnimatedMoon height={24} width={24} />
		) : (
			<AnimatedSun height={24} width={24} />
		);

	return (
		<a
			className="color-theme-switch"
			type="button"
			onClick={toggleColorTheme}
		>
			{themeIcon}
		</a>
	);
};

export default ColorThemeSwitch;
