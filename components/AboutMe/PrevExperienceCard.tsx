import Image from 'next/image';
import CardTitle from './CardTitle';
import { studentPhotos, workPhotos, BLUR_DATA_URL } from './photos';
import { Divider, HighlightText } from '../common';

export default function PrevExperienceCard() {
	return (
		<div className="mt-8 p-4 px-6 pb-8 rounded-[2rem] bg-gray-50 dark:bg-gray-900 sm:bg-none">
			<CardTitle>What I did as Architect / Space Designer</CardTitle>

			<div className="mt-10">
				<HighlightText fontSize="xl">🛰️ In Work Field</HighlightText>
				<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 text-lg font-medium break-keep responsive-text-gray overflow-x-scroll">
					{workPhotos.map((workPhoto, idx) => (
						<li>
							<figure className="flex items-center justify-center w-[100%]">
								<Image
									src={workPhoto}
									alt={'work photo' + idx}
									width={500}
									height={500}
									sizes="500px"
									placeholder="blur"
									blurDataURL={BLUR_DATA_URL}
									quality={75}
								/>
							</figure>
						</li>
					))}
				</ul>
			</div>
			<Divider marginTop="mt-16" />

			<div className="mt-20">
				<HighlightText fontSize="xl">🎨 In Uni</HighlightText>
				<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 text-lg font-medium break-keep responsive-text-gray">
					{studentPhotos.map((studentPhoto, idx) => (
						<li>
							<Image
								src={studentPhoto}
								alt={'student photo' + idx}
								width={500}
								height={500}
								placeholder="blur"
								blurDataURL={BLUR_DATA_URL}
								// className="w-[88%]"
								quality={75}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
