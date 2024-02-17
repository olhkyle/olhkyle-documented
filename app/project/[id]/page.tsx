'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data';
import { useParams } from 'next/navigation';
import { ProjectWithThumbnail } from '@/data/projects';
import { Callout, MainTitle, MainFeatureDetail, OverviewDetail, TechStackDetail } from '@/components';
import { thumbnails } from '@/constants/thumbnails';
import formattedDate from '@/utils/formattedDate';
import { BLUR_DATA_URL } from '@/components/AboutMe/photos';

export default function Project() {
	const params = useParams();

	const imageContainerRef = React.useRef<HTMLDivElement | null>(null);

	const { links, overviewEN, wip, startDate, endDate, techStacks, myTasks, mainFeatures } = projects.find(
		project => project.title === params.id.toString().replace(/-/g, ' '),
	) as ProjectWithThumbnail;

	return (
		<>
			<div className="block sm:flex flex-col justify-between xl:flex-row">
				<MainTitle>{params.id.toString().replace(/-/g, ' ')}®</MainTitle>
				<div className="mt-10 text-end text-xl font-bold sm:text-[32px] md:text-[48px]">{`[${
					formattedDate({ startDate, endDate }).split('-')[1] ?? 'Ongoing'
				}]`}</div>
			</div>
			{wip && <Callout margin="mt-20" content="Work In Progress" backgroundColor="bg-gray-800" />}
			{wip && (
				<Callout
					margin="mt-20"
					content="Test ID : test1234@test.com / PW : test@#$1234"
					backgroundColor="bg-gray-800"
				/>
			)}
			<ul className="flex flex-wrap justify-end mt-40 ml-auto gap-4">
				{links.map(({ title, href }: { title: string; href: string }) => (
					<li key={title}>
						<Link
							href={href}
							target="_blank"
							className="font-medium underline underline-offset-2 hover:text-blue-200 text-sm sm:text-lg">
							{title.toUpperCase()}
						</Link>
					</li>
				))}
			</ul>
			<div className="flex justify-between items-center mt-24 gap-10">
				<p className="font-medium text-sm sm:text-lg">{overviewEN}</p>
				<button
					type="button"
					className="hover-ring w-[150px] h-[40px] border-[1px] border-text-gray-300 rounded-full font-bold hover:text-blue-200 hover:border-0 text-xs sm:text-lg"
					onClick={() => {
						const $target = imageContainerRef.current;

						$target &&
							window.scrollTo({
								top: $target.offsetHeight + $target.offsetTop,
								behavior: 'smooth',
							});
					}}>
					Discover ↓
				</button>
			</div>
			<div className="flex flex-col my-12" ref={imageContainerRef}>
				<Image
					src={thumbnails.find(thumb => thumb.src.includes(params.id.toString().toLowerCase()))!}
					alt={params.id.toString()}
					className="rounded-2xl w-full h-auto border-[1px]"
					sizes="100vw"
					placeholder="blur"
					blurDataURL={BLUR_DATA_URL}
					quality={100}
				/>
			</div>

			<TechStackDetail data={techStacks} />
			{mainFeatures && <MainFeatureDetail data={mainFeatures} />}
			<OverviewDetail data={myTasks} />
		</>
	);
}
