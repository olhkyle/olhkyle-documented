'use client';

import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaCircleNotch } from 'react-icons/fa';
import useTheme, { ToggleTheme } from '@/hooks/useTheme';

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

	if (!mounted) {
		return (
			<button
				className={`${positionClass} p-2 w-[42px] h-[42px] rounded-lg border-[1px] border-gray-200 bg-white dark:bg-dark hover:text-blue-200 z-50`}>
				<FaCircleNotch size="24" className="animate-spin text-blue-200" />
			</button>
		);
	}

	return (
		<button
			className={`${positionClass} p-2 w-[42px] h-[42px] rounded-lg border-[1px] border-gray-200 bg-white dark:bg-dark hover:text-blue-200 z-50`}
			onClick={toggleTheme as ToggleTheme}>
			{theme === 'light' ? <FiMoon size="24" /> : <FiSun size="24" />}
			{/* <span
				className={`absolute top-[50%] left-[50%] dark:bg-white bg-dark w-[24px] h-[24px] rounded-full -translate-x-[50%] -translate-y-[50%]`}></span> */}
		</button>
	);
}
