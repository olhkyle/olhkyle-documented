import { Cover, KindOfDeveloperCard, LanguagesCard, SkillCard } from '@/components';

export default function AboutMe() {
	return (
		<>
			<div className="flex justify-between gap-4 w-full sm:mt-[3rem]">
				<h2 className="text-[2.5rem] font-bold break-keep sm:text-[2.5rem] md:text-[64px]">Kyle.</h2>
			</div>
			<Cover />
			<KindOfDeveloperCard />
			<SkillCard />
			<LanguagesCard />
		</>
	);
}
