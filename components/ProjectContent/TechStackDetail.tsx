'use client';

import React from 'react';
import { PiPlusBold } from 'react-icons/pi';

export default function TechStackDetail({ data }: { data: string[] }) {
	const [isActive, setActive] = React.useState(false);

	return (
		<div className="mt-2 py-6 border-t-[1px] border-dark dark:border-white">
			<div className="flex justify-between items-center">
				<h3 className="pl-6 border-l-4 font-bold text-2xl sm:text-4xl">{'TECH STACKS'}</h3>
				<button type="button" className="font-bold" onClick={() => setActive(!isActive)}>
					<PiPlusBold size="27" className={`${isActive ? 'rotate-45 text-blue-200' : 'rotate-0'} duration-300`} />
				</button>
			</div>

			<ul className={`gap-4 ${isActive ? 'flex' : 'hidden'} flex-wrap mt-8 pl-4 sm:pl-8`}>
				{data.map(value => (
					<li key={value} className="px-5 py-1 border-[1px] border-dark dark:border-white rounded-full">
						{value}
					</li>
				))}
			</ul>
		</div>
	);
}
