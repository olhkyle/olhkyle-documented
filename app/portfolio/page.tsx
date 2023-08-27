import { MainTitle, PortfolioProject } from '@/components';
import { projects } from '@/data';

export default function Portfolio() {
	return (
		<>
			<div className="flex justify-between items-center sm:mt-[3rem]">
				<MainTitle>Portfolio.</MainTitle>
				<span className="text-blue-200 font-bold hidden sm:block text-8xl">{projects.length}</span>
			</div>
			<div className="grid grid-cols-4 gap-x-6 mt-20 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl mb-64">
				{projects.map(project => (
					<PortfolioProject key={project.title} project={project} />
				))}
			</div>
		</>
	);
}
