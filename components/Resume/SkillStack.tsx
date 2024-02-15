import { SkillStack } from '@/data/skills';
import { HighlightText } from '../common';

interface SkillStackProps {
	_skill: SkillStack;
}

export default function SkillStack({ _skill: { skill } }: SkillStackProps) {
	return (
		<li className="flex gap-2">
			{skill.map((s, idx) => (
				<HighlightText key={idx} fontWeight="medium">
					{s}
				</HighlightText>
			))}
		</li>
	);
}
