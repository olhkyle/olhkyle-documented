import Image, { StaticImageData } from 'next/image';

interface ImageBlockProps {
	src: StaticImageData;
	blockClassName: string;
	index: number;
}

export default function ImageBlock({ src, blockClassName, index }: ImageBlockProps) {
	return (
		<>
			<div className={blockClassName}>
				<Image
					alt={`trello-git-${index}`}
					src={src}
					className={`rounded-lg object-contain`}
					sizes="(min-width: 768px) 50vw, 100vw"
					priority
				/>
			</div>
		</>
	);
}
