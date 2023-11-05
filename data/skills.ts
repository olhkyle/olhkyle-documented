export type TechStack =
	| 'HTML'
	| 'CSS'
	| 'CSS(Sass)'
	| 'SASS'
	| 'Styled-Components'
	| 'Emotion'
	| 'TailwindCSS'
	| 'Vanilla-Extract'
	| 'JavaScript'
	| 'JavaScript[ES6+]'
	| 'TypeScript'
	| 'Lodash'
	| 'React'
	| 'NextJS'
	| 'Vue'
	| 'Nuxt'
	| 'Angular'
	| 'Zustand'
	| 'Recoil'
	| 'Redux'
	| 'Redux Toolkit'
	| 'Jotai'
	| 'RTK Query'
	| 'React Query'
	| 'Framer-Motion'
	| 'd3.js'
	| 'chart.js'
	| 'Zod'
	| 'Yup'
	| 'React-Hook-Form'
	| 'Mantine'
	| 'Ant Design'
	| 'MUI'
	| 'Jest'
	| 'Storybook'
	| 'Vitest'
	| 'Vite'
	| 'Rollup'
	| 'Webpack'
	| 'Npm'
	| 'Yarn'
	| 'Yarn Berry'
	| 'Pnpm'
	| 'Node.js'
	| 'Express.js'
	| 'NestJS'
	| 'Firebase'
	| 'Github Actions'
	| 'AWS Cloudfront/S3'
	| 'Git'
	| 'Github'
	| 'Slack'
	| 'Figma'
	| 'Photoshop'
	| 'Illustrator'
	| 'Premiere Pro';

export interface SkillStack {
	skill: TechStack[];
	description: string;
}

const skills: SkillStack[] = [
	{
		skill: ['HTML'],
		description: 'Semantic Markup for web standards with HTML5, understanding 4 web accessibility principles of WCAG ',
	},
	{
		skill: ['CSS(Sass)', 'Styled-Components', 'Emotion', 'TailwindCSS'],
		description: 'Implement Responsive Design and decent UI components',
	},
	{
		skill: ['JavaScript'],
		description: 'Write code based on an understanding of how JavaScript works and the syntax of ES6+',
	},
	{ skill: ['TypeScript'], description: 'Predictive error handling with type checking using TypeScript' },
	{ skill: ['React'], description: 'Developing SPA(Single Page Application)' },
	{ skill: ['Recoil', 'Redux Toolkit'], description: 'Global State management' },
	{ skill: ['React Query'], description: 'Server State management with React Query' },
	{
		skill: ['Node.js', 'Express.js'],
		description: 'Backend work on user, JWT token, and CRUD API specification',
	},
	{ skill: ['Git', 'Github', 'Slack'], description: 'Collaborate with teams properly' },
	{ skill: ['Figma'], description: `Implement simple UI design and markup with the received UI` },
];

export default skills;
