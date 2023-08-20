'use client';

import { FiArrowUp } from 'react-icons/fi';
import useScroll from '../../hooks/useScroll';

interface ScrollToTopButtonProps {
	topPosToStopShowing?: number;
}

export default function ScrollToTopButton({ topPosToStopShowing = 300 }: ScrollToTopButtonProps) {
	const yOffset = useScroll();

	return (
		<>
			{yOffset >= topPosToStopShowing && (
				<button
					className="fixed bottom-16 right-4 p-2 rounded-lg border-[1px] border-gray-200 bg-white dark:bg-dark hover:bg-gray-100 dark:hover:bg-gray-900 sm:right-8 md:right-10"
					onClick={() => {
						window.scrollTo({
							top: 0,
							behavior: 'smooth',
						});
					}}>
					<FiArrowUp size="24" />
				</button>
			)}
		</>
	);
}
