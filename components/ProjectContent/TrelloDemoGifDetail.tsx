'use client';

import React from 'react';
import gif1 from '@/public/project/trello/trello-gif-1.gif';
import gif2 from '@/public/project/trello/trello-gif-2.gif';
import gif3 from '@/public/project/trello/trello-gif-3.gif';
import { PiPlusBold } from 'react-icons/pi';
import { ImageBlock } from '.';

export default function TrelloDemoGifDetail() {
	const [isActive, setActive] = React.useState(false);

	return (
		<div className="mt-2 py-6 border-t-[1px] border-dark dark:border-white">
			<div className="flex justify-between items-center">
				<h3 className="pl-6 border-l-4 font-bold text-2xl sm:text-4xl">{'DEMO'}</h3>
				<button type="button" className="font-bold" onClick={() => setActive(!isActive)}>
					<PiPlusBold size="27" className={`${isActive ? 'rotate-45 text-blue-200' : 'rotate-0'} duration-300`} />
				</button>
			</div>
			<div className={`${isActive ? 'grid' : 'hidden'} grid-rows-3 sm:grid-rows-3 sm:grid-flow-col gap-4 mt-8 p-4`}>
				{isActive && (
					<>
						<ImageBlock src={gif3} blockClassName={'sm:row-span-3 sm:col-span-2'} />
						<ImageBlock src={gif1} blockClassName={'sm:col-span-2'} />
						<ImageBlock src={gif2} blockClassName={'sm:col-span-1'} />
					</>
				)}
			</div>
		</div>
	);
}
