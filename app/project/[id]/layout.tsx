'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';
import { Spacer, TrelloDemoGifDetail } from '@/components';

interface ProjectProps {
	params: { id: string };
	children: React.ReactNode;
}

export default function Project({ params: { id }, children }: ProjectProps) {
	const router = useRouter();

	return (
		<>
			<div className="flex flex-col justify-between sm:mt-[2rem]">
				<div className="flex justify-between items-center">
					<button
						type="button"
						className="inline-flex justify-center items-center mt-2 mr-3 w-8 h-8 rounded-full border-[1px] border-black dark:border-gray-600 dark:hover:border-gray-200 sm:hidden"
						onClick={() => router.back()}>
						<FiArrowLeft size="24" />
					</button>
				</div>
				{children}
			</div>

			{id === 'Vanilla-Trello' && <TrelloDemoGifDetail />}

			<Spacer direction="vertical" size={20} />
		</>
	);
}
