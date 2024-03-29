'use client';

import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';

interface KindOfDeveloperItemProps {
	kind: { title: string; content: string[] };
}

export default function KindOfDeveloperItem({ kind: { title, content } }: KindOfDeveloperItemProps) {
	const [isActive, setActive] = React.useState(false);

	return (
		<li key={title} className="flex flex-col gap-2 cursor-pointer">
			<div
				className="flex items-center sm:items-center gap-1 font-medium text-base text-white sm:text-lg"
				onClick={() => setActive(!isActive)}>
				<div className="mr-1 w-7">
					<BsArrowRightCircle
						size="21"
						className={`transition-transform ${isActive ? 'rotate-90 text-blue-200' : 'rotate-0 text-white'}`}
					/>
				</div>
				<span className={`text-[15px] sm:text-base hover:text-blue-100 ${isActive && 'text-blue-100'}`}>{title}</span>
			</div>
			{content.map(item => (
				<p key={item} className={`text-[15px] px-4 ${isActive ? 'block' : 'hidden'} text-white`}>
					{item}
				</p>
			))}
		</li>
	);
}
