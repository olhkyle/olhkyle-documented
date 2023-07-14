import { HighlightText } from '../common';

export default function Cover() {
	return (
		<>
			<div className="mt-12 mb-10 p-10 break-keep text-2xl sm:mt-20 lg:text-4xl border-[1px] border-gray-900 rounded-[2rem]">
				<p className="flex flex-col gap-4 text-2xl md:text-4xl">
					<span className="font-bold">
						Hello! I'm <HighlightText>Kyle</HighlightText> 🖐🏻
					</span>
					<span className="font-bold">Web Front-End Developer based in Seoul, Korea.</span>
				</p>
			</div>

			<div className="break-keep text-base leading-7 responsive-text-gray sm:text-lg">
				<div>
					<p className="py-2 px-8">I graduated from Kookmin University in 2023 with studying Architecture. </p>
					<p className="py-2 px-8">
						Smoothly got into programming field, because I like to designing and building digital products, such as
						web-app. I study Web FrontEnd Development with a passion, focusing on UI / UX details.
					</p>

					<p className="py-2 px-8">
						Currently, I'm working on personal projects and learning Typescript and algorithms to create habits and
						environments for steady growth. I'm also trying to keep track of my projects and learnings to use them as
						growth indicators and to look back on them later and fill my shortage.
					</p>
				</div>
			</div>
		</>
	);
}
