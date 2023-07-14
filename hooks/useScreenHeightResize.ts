import React from 'react';
import { debounce } from 'lodash';

const useScreenHeightResize = () => {
	const setScreenSize = debounce(() => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}, 500);

	React.useEffect(() => {
		setScreenSize();
		window.addEventListener('resize', setScreenSize);
		return () => window.removeEventListener('resize', setScreenSize);
	});
};

export default useScreenHeightResize;
