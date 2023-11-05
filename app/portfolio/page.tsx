import { MainTitle, PortfolioProject } from '@/components';
import { PORTFOLIO_NOTION } from '@/constants/url';
import { projects } from '@/data';
import Link from 'next/link';

export default function Portfolio() {
	return (
		<>
			<div className="flex justify-between items-center sm:mt-[3rem]">
				<MainTitle>Portfolio.</MainTitle>
				<span className="text-blue-200 font-bold hidden sm:block text-8xl">{projects.length}</span>
			</div>
			<div className="flex flex-end mt-10">
				<Link
					href={PORTFOLIO_NOTION}
					target="_blank"
					className="ml-auto py-2 px-4 font-bold text-white bg-blue-50 rounded-[6px] hover:bg-blue-100">
					Notion Portfolio(KR)
				</Link>
			</div>
			<div className="grid grid-cols-4 gap-x-6 mt-10 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl mb-64">
				{projects.map(project => (
					<PortfolioProject key={project.title} project={project} />
				))}
			</div>
		</>
	);
}
