import Link from 'next/link';
import { HighlightText } from '../common';

export default function PortfolioProject({ project: { title, techStacks, overviewEN } }: { project: Project }) {
	return (
		<div className="col-span-4 mb-12">
			<Link href={`/project/${title.replace(/\s/g, '-')}`}>
				<figure className="aspect-h-4 aspect-w-3 rounded-[2rem]  hover-ring">
					<img src="/portfolio/2.jpg" alt="mee" className="rounded-[2rem] object-cover object-center w-full" />
				</figure>
				<div className="flex flex-col gap-4 mt-6">
					<ul className="flex flex-wrap gap-2">
						{techStacks.slice(0, 3).map(stack => (
							<li key={stack}>
								<HighlightText>{stack}</HighlightText>
							</li>
						))}
					</ul>
					<h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
					<p> {overviewEN}</p>
				</div>
			</Link>
		</div>
	);
}
