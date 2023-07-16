import React from 'react';

type ToggleTheme = () => void;

const THEME = 'theme';

const useTheme = () => {
	let initializeTheme;

	if (typeof window !== 'undefined') {
		initializeTheme = (): string =>
			localStorage.getItem(THEME) ?? (window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light');
	}

	const [theme, setTheme] = React.useState(initializeTheme);

	React.useEffect(() => {
		if (document) {
			document.body.dataset.theme = theme;
			localStorage.setItem(THEME, theme as string);
			document.cookie = `theme=${theme}; path=/;`;
		}
	}, [theme]);

	const toggleTheme = () => setTheme(theme => (theme === 'light' ? 'dark' : 'light'));

	return [theme, toggleTheme];
};

export type { ToggleTheme };
export default useTheme;
