import { CardTitle } from '.';
import { BiCaretRight } from 'react-icons/bi';

const strengths: string[] = [
	'I believe in the joy of immersing oneself in something.💡',
	'I like to make something related to visual 🖥️',
	`From an Engineering perspective, I keep finding ways on how to enhance UI/UX on products 🚀`,
];

export default function StrengthsCard() {
	return (
		<div className="mt-16 p-4 px-5 pb-8 rounded-[2rem] bg-gray-50 dark:bg-gray-900 sm:bg-none">
			<CardTitle>Strengths</CardTitle>
			<ul className="flex flex-col gap-2 mt-5 text-base sm:text-lg font-medium break-keep">
				{strengths.map(content => (
					<li key={content} className="flex gap-3 justify-start">
						<span className="mt-1 w-[21px]">
							<BiCaretRight size="21" />
						</span>
						<p className="text-[15px] sm:text-base">{content}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
