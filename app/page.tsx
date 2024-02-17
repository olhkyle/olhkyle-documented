import { Cover, KindOfDeveloperCard, LanguagesCard, MainTitle, SkillCard } from '@/components';

export default function AboutMe() {
	return (
		<>
			<div className="flex justify-between gap-4 w-full sm:mt-[3rem]">
				<MainTitle>Kyle.</MainTitle>
			</div>
			<Cover />
			<KindOfDeveloperCard />
			<SkillCard />
			<LanguagesCard />
		</>
	);
}
