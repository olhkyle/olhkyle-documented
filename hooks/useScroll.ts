import React from 'react';
import { throttle } from 'lodash';

const WAIT_TIME = 300;

const useScroll = () => {
	const [yOffset, setYOffset] = React.useState(0);

	const handleScroll = throttle(() => {
		setYOffset(window.scrollY);
	}, WAIT_TIME);

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return yOffset;
};

export default useScroll;
