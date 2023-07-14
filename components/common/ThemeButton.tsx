'use client';

import { FiSun, FiMoon, FiCircle } from 'react-icons/fi';
import { FaCircleNotch } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import React from 'react';

interface ThemeButtonProps {
	position: 'in' | 'out';
}

export default function ThemeButton({ position }: ThemeButtonProps) {
	const [mounted, setMounted] = React.useState(false);
	const { theme, setTheme: toggleTheme } = useTheme();

	const positionClass = position === 'in' ? 'ml-2' : 'absolute bottom-[120px] right-5';

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
			onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>
			{theme === 'light' ? <FiMoon size="24" /> : <FiSun size="24" />}
		</button>
	);
}
