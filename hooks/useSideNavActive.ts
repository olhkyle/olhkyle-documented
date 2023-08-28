import React from 'react';

const KEY = 'isSideNavOpen';

const useSideNavActive = () => {
	let activeState;

	if (typeof window !== 'undefined') {
		activeState = JSON.parse(localStorage.getItem(KEY)!) ?? false;
	}

	const [isActive, setActive] = React.useState(activeState);

	const toggleActive = () =>
		setActive((isActive: boolean) => {
			localStorage.setItem(KEY, JSON.stringify(!isActive));

			return !isActive;
		});

	return [isActive, toggleActive] as const;
};

export default useSideNavActive;
