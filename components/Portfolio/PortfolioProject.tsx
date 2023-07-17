import Link from 'next/link';
import Image from 'next/image';
import { HighlightText } from '../common';
import { ProjectWithThumbnail } from '@/data/projects';

export default function PortfolioProject({
	project: { title, techStacks, overviewEN, thumbnail },
}: {
	project: ProjectWithThumbnail;
}) {
	return (
		<div className="col-span-4 mb-12">
			<Link href={`/project/${title.replace(/\s/g, '-')}`}>
				<figure className="aspect-h-4 aspect-w-3 rounded-2xl hover-ring">
					<Image
						src={thumbnail}
						alt={title}
						sizes="100vw"
						priority
						className="rounded-2xl object-contain object-center w-full h-auto border-2"
					/>
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
