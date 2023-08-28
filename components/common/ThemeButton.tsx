'use client';

import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaCircleNotch } from 'react-icons/fa';
import useTheme from '@/hooks/useTheme';

interface ThemeButtonProps {
	position: 'nav' | 'sideNav';
}

export default function ThemeButton({ position }: ThemeButtonProps) {
	const [mounted, setMounted] = React.useState(false);

	const positionClass = position === 'nav' ? 'ml-2' : 'absolute bottom-[120px] right-5';

	const [theme, toggleTheme] = useTheme();

	React.useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<button className={`${positionClass} theme-button`} onClick={toggleTheme} aria-label="theme-btn">
			{mounted ? (
				<>{theme === 'light' ? <FiMoon size="24" /> : <FiSun size="24" />}</>
			) : (
				<FaCircleNotch size="24" className="animate-spin text-blue-200" />
			)}
		</button>
	);
}
