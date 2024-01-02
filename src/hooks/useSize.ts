import { useState, useEffect } from 'react';

const useSize = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [isMediumScreen, setIsMediumScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth <= 950);
			setIsMediumScreen(
				window.innerWidth >= 700 && window.innerWidth <= 950
			);
		};

		window.addEventListener('resize', handleResize);
		handleResize(); // Initial check

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return { isSmallScreen, isMediumScreen };
};

export default useSize;
