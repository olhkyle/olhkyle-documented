import {
	Cover,
	Divider,
	ExperienceCard,
	KindOfDeveloperCard,
	LanguagesCard,
	MainTitle,
	PrevExperienceCard,
	SkillCard,
	StrengthsCard,
} from '@/components';
import Image from 'next/image';

export default function AboutMe() {
	return (
		<>
			<div className="flex justify-between gap-4 w-full sm:mt-[3rem]">
				<MainTitle>About Me.</MainTitle>
				<div className="hidden justify-center items-center w-48 h-48 border-[1px] border-gray-200 dark:border-gray-900 rounded-full overflow-hidden md:flex">
					<Image
						src={'/about/profile-sculpture.png'}
						alt="sculpture"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						width={500}
						height={500}
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8cAYAArIBvs7xUBkAAAAASUVORK5CYII="
						quality={75}
					/>
				</div>
			</div>
			<Cover />
			<Divider />
			<StrengthsCard />
			<PrevExperienceCard />
			<KindOfDeveloperCard />
			<SkillCard />
			<LanguagesCard />
			<ExperienceCard />
		</>
	);
}
