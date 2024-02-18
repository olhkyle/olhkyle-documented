import { Cover, KindOfDeveloperCard, LanguagesCard, SkillCard } from '@/components';

export default function AboutMe() {
	return (
		<>
			<div className="flex flex-col justify-between w-full sm:mt-[3rem]">
				<span className="mt-5 ml-2 font-bold text-base sm:text-lg">kylekwon.dev@gmail.com</span>
				<span className="ml-2 text-base sm:text-lg">Seoul, Korea</span>
			</div>
			<Cover />
			<KindOfDeveloperCard />
			<SkillCard />
			<LanguagesCard />
		</>
	);
}
