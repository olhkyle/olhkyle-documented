import { CardTitle, KindOfDeveloperItem } from '.';

const kindOfDeveloper: { title: string; content: string[] }[] = [
	{
		title: 'A developer who maintains the fundamentals',
		content: [
			`I prioritize adhering to the fundamentals in any task I participate in. Accomplishing what needs to be done as a matter of course and internalizing it can be quite challenging. Due to my meticulous and calm nature, I tend to create a checklist of essential aspects that must be upheld and strive to constantly be aware of crucial elements that should not be overlooked.`,
			`During the process of working on a team project, when team members overlooked elements that are crucial for user experience, such as UI interactions or essential components for a web application, I made sure to recognize, document, and consistently remind team members of these aspects as we progressed with the project.`,
		],
	},
	{
		title: 'A developer who implement great UI/UX',
		content: [
			`Before becoming a developer, I spent a long time studying and working in the fields of architecture and interior design, honing my ability to implement visually stunning creations. Through my experience in a field that requires both functionality and visual appeal, I have gained a deep understanding of the importance of visual composition and functionality.`,
			`I have developed a keen interest in implementing excellent design and functionality not only in hardware but also in software. This naturally led me to delve into FrontEnd Development, where I could leverage my previous experiences to focus on creating great UI/UX and immerse myself in projects.`,
			`For example, in a team project called FineApple, I recognized the lack of UI/UX quality in the initial planning phase of an Apple community feature. To address this, we planned and carried out a clone project aimed at improving the UI/UX. However, we didn't stop at cloning; instead, we extended the project timeline, changed the direction of the planning, and proceeded with development and deployment, incorporating the team's ideas for a better UI/UX community project.
				`,
		],
	},
	{
		title: 'A developer with consistent learning ability.',
		content: [
			`To enhance my understanding of JavaScript, I have utilized resources like "Modern JavaScript Deep Dive" to build a strong foundation. Building upon this foundation, I have engaged in team projects and personal projects to not only gain collaboration experience but also to expand my development skills.`,
			`I have a habit of documenting the technologies I have self-studied using platforms like Notion and maintaining a personal blog. Through this practice, as well as writing reflections during project work, I continuously reflect on myself and fill in any knowledge gaps, consistently striving to learn and improve.`,
			`Thanks to my extensive travel and experience as an exchange student, I am comfortable writing, reading, and speaking in English. I frequently utilize English-written development documentation to learn new technologies actively and apply them in projects as part of my learning process.`,
		],
	},
];

export default function KindOfDeveloperCard() {
	return (
		<div className="mt-8 p-4 px-6 pb-8 rounded-[2rem] bg-gray-50 dark:bg-gray-900 sm:bg-none">
			<CardTitle>What kind of Developer</CardTitle>
			<ul className="flex flex-col gap-4 mt-5 text-lg font-medium break-keep responsive-text-gray">
				{kindOfDeveloper.map(kind => (
					<KindOfDeveloperItem key={kind.title} kind={kind} />
				))}
			</ul>
		</div>
	);
}
