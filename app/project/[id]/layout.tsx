'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';
import { MainTitle } from '@/components';
import { projects } from '@/data';
import formattedDate from '@/utils/formattedDate';
import { thumbnails } from '@/constants/thumbnails';
import { OverviewDetail, TechStackDetail, TrelloDemoGifDetail } from '@/components/ProjectContent';

interface ProjectProps {
	params: { id: string };
}

export default function Project({ params: { id } }: ProjectProps) {
	const router = useRouter();

	const { links, overviewEN, startDate, endDate, techStacks, myTasks } = projects.find(
		project => project.title === id.replace(/-/g, ' '),
	) as Project;

	return (
		<>
			<div className="flex flex-col justify-between sm:mt-[2rem]">
				<div className="flex justify-between items-center">
					<button
						type="button"
						className="inline-flex justify-center items-center mt-2 mr-3 w-8 h-8 rounded-full border-[1px] border-black dark:border-white sm:hidden"
						onClick={() => router.back()}>
						<FiArrowLeft size="24" />
					</button>
				</div>
				<div className="block sm:flex flex-col justify-between sm:flex-row sm:items-center">
					<MainTitle>{id!.replace(/-/g, ' ')}®</MainTitle>
					<div className="text-end text-xl font-bold sm:text-[60px]">{`[${
						formattedDate({ startDate, endDate }).split('-')[1] ?? 'Ongoing'
					}]`}</div>
				</div>
				<ul className="flex flex-wrap justify-end mt-40 ml-auto gap-4">
					{links.map(({ title, href }: { title: string; href: string }) => (
						<li key={title}>
							<Link
								href={href}
								target="_blank"
								className="underline underline-offset-2 hover:text-blue-200 text-sm sm:text-lg">
								{title.toUpperCase()}
							</Link>
						</li>
					))}
				</ul>
				<div className="flex justify-between items-center mt-24 gap-10">
					<p className="font-medium text-sm sm:text-lg">{overviewEN}</p>
					<button
						type="button"
						className="hover-ring w-[150px] h-[40px] border-[1px] border-dark dark:border-white rounded-full font-bold hover:text-blue-200 hover:border-0 text-xs sm:text-lg">
						Discover ↓
					</button>
				</div>
			</div>
			<div className="flex flex-col my-12">
				<Image
					src={thumbnails.find(thumb => thumb.src.includes(id.toLowerCase()))!}
					alt="trello-mock"
					sizes="100vw"
					className="rounded-2xl w-full h-auto border-[1px]"
				/>
			</div>

			<TechStackDetail data={techStacks} />
			<OverviewDetail data={myTasks} />
			{id === 'Vanilla-Trello' && <TrelloDemoGifDetail />}

			<div className="mt-8 text-center text-xl sm:text-2xl text-gray-500 font-bold">
				The rest of the content will be updated soon 🚀
			</div>
		</>
	);
}
