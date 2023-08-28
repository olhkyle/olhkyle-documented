import Image from 'next/image';
import { Description, RedirectButton, Title } from '@/components';
import links from '@/constants/links';

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center mt-2 mb-8 w-full">
			<Title />
			<Image
				src={'/home/cohousing-front.jpg'}
				alt="cohousing-front"
				className="mt-12 mx-5 w-4/5 sm:w-5/6 lg:w-4/6 h-auto rounded-lg object-contain object-center border-[1px] border-gray-200"
				sizes="(min-width: 768px) 50vw, 100vw"
				width={500}
				height={300}
				quality={75}
				placeholder="blur"
				blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8e/dBPQAIVAMbm/65WQAAAABJRU5ErkJggg=="
			/>
			<Description />
			<div className="flex flex-col flex-wrap gap-6 mx-auto justify-center mt-5 sm:flex-row sm:mt-12 ">
				{links.map(link => (
					<RedirectButton key={link} path={link.toLowerCase()}>
						{link}
					</RedirectButton>
				))}
			</div>
		</div>
	);
}
