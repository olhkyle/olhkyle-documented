declare type Lang = 'KOR' | 'ENG';
declare type Theme = 'dark' | 'light';
declare type Project = {
	title: string;
	subtitle: string;
	team: boolean;
	composition: string;
	startDate: Date;
	endDate: Date | string;
	links: Array<{
		title: string;
		href: string;
		icon: React.ReactNode;
	}>;
	callout: string;
	overviewEN: string;
	overviewKR: string;
	myTasks: string[];
	improvement: string[];
	techStacks: string[];
};

// declare type HTML = 'HTML';
// declare type CSS = 'CSS' | 'SASS(SCSS)' | 'Styled-Components' | 'Emotion' | 'TailwindCSS';
// declare type JS = 'JavaScript';
// declare type TS = 'TypeScript';
// declare type SPA = 'React';
// declare type GlobalState = 'Recoil' | 'Redux Toolkit';
// declare type ServerState = 'React Query';
// declare type BackEnd = 'Node.js' | 'Express.js';
// declare type Collaboration = 'Git' | 'Github' | 'Slack';
// declare type UITool = 'Figma';

// declare type Skill = HTML | CSS | JS | TS | SPA | GlobalState | ServerState | BackEnd | Collaboration | UITool;
declare type SkillStack = { skill: string[]; description: string };

declare interface DevExperience extends Education {
	links: string[];
}

declare type Education = {
	id: string;
	title: string;
	subTitle: string;
	description: string[] | null;
	startDate: Date;
	endDate: Date;
};

declare type Etc = {
	id: string;
	title: string;
	department: string;
	description: string;
	startDate: Date;
	endDate: Date | 'Present' | '';
	link: string;
};
