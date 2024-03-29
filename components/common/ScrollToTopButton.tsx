'use client';

import { FiArrowUp } from 'react-icons/fi';
import useScroll from '../../hooks/useScroll';

interface ScrollToTopButtonProps {
	topPosToStartShowing: number;
}

export default function ScrollToTopButton({ topPosToStartShowing = 300 }: ScrollToTopButtonProps) {
	const yOffset = useScroll();

	return (
		<>
			{yOffset >= topPosToStartShowing && (
				<button
					className="fixed bottom-16 right-4 p-2 rounded-lg border-[1px] bg-dark border-gray-600 hover:border-gray-200 hover:bg-gray-900 sm:right-8 md:right-10"
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
