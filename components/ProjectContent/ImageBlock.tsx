import Image, { StaticImageData } from 'next/image';

interface ImageBlockProps {
	src: StaticImageData;
	blockClassName: string;
}

export default function ImageBlock({ src, blockClassName }: ImageBlockProps) {
	return (
		<>
			<div className={blockClassName}>
				<Image
					alt={'gif3'}
					src={src}
					sizes="(min-width: 808px) 50vw, 100vw"
					placeholder="blur"
					className={`rounded-xl object-contain`}
				/>
			</div>
		</>
	);
}
