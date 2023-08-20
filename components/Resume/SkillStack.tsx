import { SkillStack } from '@/data/skills';
import { HighlightText } from '../common';

interface SkillStackProps {
	_skill: SkillStack;
}

export default function SkillStack({ _skill: { skill, description } }: SkillStackProps) {
	return (
		<li className="flex flex-col">
			<div className="flex flex-wrap gap-2">
				{skill.map((s, idx) => (
					<HighlightText key={idx}>{s}</HighlightText>
				))}
			</div>
			<p className="mt-2 ml-1 responsive-text-gray">- {description}</p>
		</li>
	);
}
