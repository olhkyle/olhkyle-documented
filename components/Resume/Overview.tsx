import Image from 'next/image';
import mee from '@/public/resume/mee.jpg';
import { BLUR_DATA_URL } from '../AboutMe/photos';

const overview: string[] = [
	'Striving for steady growth',
	'Believing in the joy of immersing oneself in something',
	'Seeking ways constantly to enhance UI/UX in products, from an engineering perspective',
];

export default function Overview() {
	return (
		<div className="flex justify-between items-center">
			<div>
				<h2 className="text-[2.5rem] font-bold break-keep sm:text-[2.5rem] md:text-[64px]">Hyukmin Kwon</h2>
				<p className="mt-1 ml-1 text-lg font-medium md:text-xl break-keep">Web FrontEnd Developer</p>
				<ul className="mt-10 ml-6 text-base list-disc break-keep">
					{overview.map(value => (
						<li key={value}>{value}</li>
					))}
				</ul>
			</div>
			<div className="hidden justify-center items-center mr-2 w-64 border-[1px] border-dark object-cover overflow-hidden rounded-full sm:flex">
				<Image
					src={mee}
					alt="me"
					className="block w-full h-full"
					sizes="(max-width: 1200px) 50vw, 33vw"
					placeholder="blur"
					blurDataURL={BLUR_DATA_URL}
				/>
			</div>
		</div>
	);
}
