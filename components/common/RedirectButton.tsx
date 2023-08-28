'use client';

import { BLOG } from '@/constants/url';
import { useRouter } from 'next/navigation';
import { IoMdArrowForward } from 'react-icons/io';

interface RedirectButtonProps {
	path: string;
	children: React.ReactNode;
}

export default function RedirectButton({ path, children }: RedirectButtonProps) {
	const router = useRouter();

	return (
		<button
			className={`flex-center px-2 w-48 h-14 text-lg toggle-dark font-bold border-[2px] border-black cursor-pointer hover:text-black hover:bg-white hover:border-[2px] hover:border-black dark:hover:bg-black dark:hover:border-white dark:hover:text-white`}
			onClick={() => (path === 'blog' ? router.push(BLOG) : router.push(`/${path}`))}>
			{children}
			<IoMdArrowForward size="21" className="mr-2 hover:transition-transform translate-x-4" />
		</button>
	);
}
