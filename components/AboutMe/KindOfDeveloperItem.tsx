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
				className="flex items-start sm:items-center gap-1 font-medium text-base text-black dark:text-white sm:text-lg"
				onClick={() => setActive(!isActive)}>
				<div className="w-7">
					<BsArrowRightCircle
						size="21"
						className={`transition-transform ${
							isActive ? 'rotate-90 text-blue-200' : 'rotate-0 text-black dark:text-white'
						}`}
					/>
				</div>
				<span className={`hover:text-blue-100 ${isActive && 'text-blue-100'}`}>{title}</span>
			</div>
			{content.map(item => (
				<p key={item} className={`text-base px-4 ${isActive ? 'block' : 'hidden'}`}>
					{item}
				</p>
			))}
		</li>
	);
}
