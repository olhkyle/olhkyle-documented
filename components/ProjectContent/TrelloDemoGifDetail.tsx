'use client';

import React from 'react';
import { PiPlusBold } from 'react-icons/pi';
import { ImageBlock } from '.';
import { projects } from './projects';

export default function TrelloDemoGifDetail() {
	const [isActive, setActive] = React.useState<boolean>(false);

	return (
		<div className="mt-2 py-6 border-t-[1px] border-white">
			<div className="flex justify-between items-center">
				<h3 className="pl-6 border-l-4 font-bold text-2xl sm:text-4xl">{'DEMO'}</h3>
				<button type="button" className="font-bold" onClick={() => setActive(!isActive)}>
					<PiPlusBold size="27" className={`${isActive ? 'rotate-45 text-blue-200' : 'rotate-0'} duration-300`} />
				</button>
			</div>
			<div className={`${isActive ? 'grid' : 'hidden'} grid-rows-3 sm:grid-rows-3 sm:grid-flow-col gap-4 mt-8 p-4`}>
				{isActive && (
					<>
						{projects.map((project, idx) => (
							<ImageBlock
								key={idx}
								src={project}
								index={idx}
								blockClassName={idx === projects.length - 1 ? 'sm:row-span-3 sm:col-span-2' : 'sm:col-span-1'}
							/>
						))}
					</>
				)}
			</div>
		</div>
	);
}
