'use client';

import React from 'react';
import { PiPlusBold } from 'react-icons/pi';

interface MainFeatureDetail {
	data: { title: string; content: string[] }[];
}

export default function MainFeatureDetail({ data }: MainFeatureDetail) {
	const [isActive, setActive] = React.useState(false);

	return (
		<div className="mt-2 py-6 border-t-[1px] border-dark dark:border-white">
			<div className="flex justify-between">
				<h3 className="pl-6 border-l-4 font-bold text-2xl sm:text-4xl">{'FEATURES'}</h3>
				<button type="button" className="font-bold" onClick={() => setActive(!isActive)}>
					<PiPlusBold size="27" className={`${isActive ? 'rotate-45 text-blue-200' : 'rotate-0'} duration-300`} />
				</button>
			</div>

			<ul className={`gap-2 ${isActive ? 'flex' : 'hidden'} flex-col mt-8 pl-4 sm:pl-10`}>
				{data.map(({ title, content }) => (
					<li key={title} className="pr-5 py-1">
						<span className="inline-block mb-2 text-xl font-bold">{title}</span>
						<ul>
							{content.map(value => (
								<li key={value} className="ml-5 mb-1 list-disc">
									{value}
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
}
