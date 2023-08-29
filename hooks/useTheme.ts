import React from 'react';

type Theme = 'dark' | 'light';

const useTheme = () => {
	let initializeTheme;

	if (typeof window !== 'undefined') {
		initializeTheme = () =>
			localStorage.getItem('theme') ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
	}

	const [theme, setTheme] = React.useState(initializeTheme);

	React.useEffect(() => {
		if (document) {
			document.body.dataset.theme = theme;
			localStorage.setItem('theme', theme!);
		}
	}, [theme]);

	const toggleTheme = () => setTheme((theme): Theme => (theme === 'light' ? 'dark' : 'light'));

	return [theme, toggleTheme] as const;
};

export default useTheme;
