import { MainTitle, PortfolioProject } from '@/components';
import { projects } from '@/data';

export default function Portfolio() {
	return (
		<>
			<div className="sm:mt-[2rem]">
				<MainTitle>Portfolio.</MainTitle>
			</div>
			<div className="grid grid-cols-4 gap-x-6 mt-12 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl mb-64">
				{projects.map(project => (
					<PortfolioProject key={project.title} project={project} />
				))}
			</div>
		</>
	);
}
