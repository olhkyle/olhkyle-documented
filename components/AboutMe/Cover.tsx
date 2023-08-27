import { HighlightText } from '../common';

export default function Cover() {
	return (
		<>
			<div className="mt-12 mb-10 p-10 break-keep text-2xl sm:mt-20 lg:text-4xl border-[1px] border-gray-900 rounded-[2rem]">
				<p className="flex flex-col gap-4 text-2xl md:text-4xl">
					<span className="font-bold">
						Hello! I&apos;m <HighlightText fontSize="[36px]">Kyle</HighlightText> 🖐🏻
					</span>
					<span className="font-bold">Web Front-End Developer based in Seoul, Korea.</span>
				</p>
			</div>

			<div className="break-keep text-base leading-7 responsive-text-gray sm:text-lg">
				<div>
					<p className="py-2 px-8">I graduated from Kookmin University in 2023 with studying Architecture. </p>
					<p className="py-2 px-8">
						I&apos;ve always enjoyed and been interested in implementing visual things. While learning and practicing
						Architecture, I realized the importance of visual organization and functionality, especially with the
						various tools I use to express Architecture. It made me very interested in the software aspect of these
						tools, smoothly falling into FrontEnd development that actually implements such a great UI UX.
					</p>
					<p className="py-2 px-8">
						Currently, I&apos;m working on personal projects and learning Typescript and Algorithms with JavaScript to
						create habits and environments for steady growth. I&apos;m also trying to keep track of my projects and
						learnings to use them as growth indicators and to look back on them later and fill my shortage.
					</p>
				</div>
			</div>
		</>
	);
}
