import React from 'react';
import {
	ContactCard,
	DevExperience,
	Divider,
	Education,
	Etc,
	LinksCard,
	Overview,
	Project,
	SkillStack,
	SubTitle,
} from '@/components';
import { devExperience, education, etc, projects, skills } from '@/data';

export default function Resume() {
	return (
		<>
			<div className="mt-[2rem] sm:mt-[4rem]">
				<div className="flex flex-end mb-8">
					<span className="ml-auto italic text-gray-500 text-xs sm:text-sm">Last updated: 2024.02.15 </span>
				</div>
				<Overview />
				<div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 ">
					<ContactCard />
					<LinksCard />
				</div>
				<div className="mt-[6rem]">
					<SubTitle>Work</SubTitle>
					<ul className="flex flex-col gap-10 mt-[2.5rem]">
						{devExperience.map(experience => (
							<DevExperience key={experience.title} experience={experience} />
						))}
					</ul>
				</div>
				<div className="mt-[6rem] sm:mt-[8rem]">
					<SubTitle>Projects</SubTitle>
					<ul>
						{projects.map(project => (
							<React.Fragment key={project.title}>
								<Project project={project} />
								<Divider />
							</React.Fragment>
						))}
					</ul>
				</div>
				<div className="mt-[6rem]">
					<SubTitle>Skills</SubTitle>
					<ul className="flex flex-wrap gap-2 mt-[2.5rem]">
						{skills.map(skill => (
							<SkillStack key={skill.description} _skill={skill} />
						))}
					</ul>
				</div>
				<div className="mt-[6rem]">
					<SubTitle>Education</SubTitle>
					<ul className="flex flex-col gap-10 mt-[2.5rem]">
						{education.map(item => (
							<Education key={item.title} education={item} />
						))}
					</ul>
				</div>
				<div className="mt-[6rem]">
					<SubTitle>ETC</SubTitle>
					<ul className="flex flex-col gap-10 mt-[2.5rem]">
						{etc.map(item => (
							<Etc key={item.title} _etc={item} />
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
