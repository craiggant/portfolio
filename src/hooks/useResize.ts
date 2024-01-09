import React, { useEffect, useState } from 'react';

const useResize = () => {
	const [isResizing, setIsResizing] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (isResizing) return;
			setIsResizing(true);
			setTimeout(() => {
				setIsResizing(false);
			}, 300);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { isResizing };
};

export default useResize;
