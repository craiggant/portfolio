import { useState, useEffect } from 'react';

const useSize = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isLargeMobile, setIsLargeMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 950);
			setIsLargeMobile(
				window.innerWidth >= 700 && window.innerWidth <= 950
			);
		};

		window.addEventListener('resize', handleResize);
		handleResize(); // Initial check

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return { isMobile, isLargeMobile };
};

export default useSize;
