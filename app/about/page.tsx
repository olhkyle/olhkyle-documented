import {
	Cover,
	Divider,
	ExperienceCard,
	GradientSquare,
	KindOfDeveloperCard,
	LanguagesCard,
	MainTitle,
	SkillCard,
	StrengthsCard,
} from '@/components';

export default function AboutMe() {
	return (
		<>
			<div className="flex justify-between w-full sm:mt-[2rem]">
				<MainTitle>About Me.</MainTitle>
				<GradientSquare />
			</div>
			<Cover />
			<Divider />
			<StrengthsCard />
			<KindOfDeveloperCard />
			<SkillCard />
			<LanguagesCard />
			<ExperienceCard />
		</>
	);
}
