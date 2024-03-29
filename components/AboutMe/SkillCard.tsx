import { TechStack } from '@/data/skills';
import { CardTitle } from '.';
import { HighlightText } from '../common';

interface Skill {
	category: string;
	techStacks: TechStack[];
}

const skills: Skill[] = [
	{ category: 'html/css', techStacks: ['HTML', 'CSS(Sass)', 'Styled-Components', 'Emotion', 'TailwindCSS'] },
	{ category: 'js/ts', techStacks: ['JavaScript[ES6+]', 'TypeScript'] },
	{ category: 'library', techStacks: ['React', 'NextJS', 'Recoil', 'Redux Toolkit', 'React Query'] },
	{ category: 'server side', techStacks: ['Node.js', 'Express.js'] },
	{ category: 'collaboration tools', techStacks: ['Git', 'Github'] },
	{ category: 'design tools', techStacks: ['Figma', 'Photoshop', 'Illustrator', 'Premiere Pro'] },
];

export default function SkillCard() {
	return (
		<div className="mt-8 p-4 px-6 pb-8 rounded-[2rem] bg-gray-900 text-gray-300 sm:bg-none">
			<CardTitle>Skills</CardTitle>
			<ul className="flex flex-col gap-2 mt-5 break-keep text-md">
				{skills.map(({ category, techStacks }) => (
					<li key={category} className="flex gap-2">
						<p className="flex flex-wrap gap-2">
							{techStacks.map(stack => (
								<HighlightText key={stack} fontWeight="medium">
									{stack}
								</HighlightText>
							))}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}
