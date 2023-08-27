import { CardTitle } from '.';

const languages: string[] = ['Korean (Native)', 'English (Fluent)'];

export default function LanguagesCard() {
	return (
		<div className="mt-8 px-6 py-2 rounded-[2rem] bg-gray-50 dark:bg-gray-900 sm:bg-none">
			<CardTitle>Languages</CardTitle>
			<ul className="flex flex-col gap-2 my-5 break-keep text-lg">
				{languages.map(language => (
					<li key={language} className="flex gap-2 text-base">
						{language}
					</li>
				))}
			</ul>
		</div>
	);
}
