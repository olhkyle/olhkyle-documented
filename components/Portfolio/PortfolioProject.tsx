import Link from 'next/link';
import Image from 'next/image';
import { HighlightText } from '../common';
import { ProjectWithThumbnail } from '@/data/projects';

interface PortfolioProjectProps {
	project: ProjectWithThumbnail;
}

export default function PortfolioProject({
	project: { title, techStacks, overviewEN, thumbnail },
}: PortfolioProjectProps) {
	return (
		<div className="col-span-4 mb-12">
			<Link href={`/project/${title.replace(/\s/g, '-')}`}>
				<figure className="aspect-h-4 aspect-w-3 rounded-2xl hover-ring">
					<Image
						src={thumbnail}
						alt={title}
						className="w-full h-auto rounded-2xl object-contain object-center border-2 "
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						placeholder="blur"
						priority
					/>
				</figure>
				<div className="flex flex-col gap-3 mt-4">
					<ul className="flex flex-wrap gap-2">
						{techStacks.slice(0, 3).map(stack => (
							<li key={stack}>
								<HighlightText fontWeight="medium">{stack}</HighlightText>
							</li>
						))}
					</ul>
					<h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
					<p className="tracking-normal text-base">{overviewEN}</p>
				</div>
			</Link>
		</div>
	);
}
