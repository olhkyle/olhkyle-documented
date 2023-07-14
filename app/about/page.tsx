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
			<div className="flex justify-between items-center w-full sm:mt-[2rem]">
				<div className="flex flex-col justify-between">
					<MainTitle>About Me.</MainTitle>
				</div>
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
