import { Education } from './education';
import { v4 as uuid4 } from 'uuid';

export interface DevExperience extends Education {
	links: string[];
}

const devExperience: DevExperience[] = [
	{
		id: uuid4(),
		title: 'Zerobase FrontEnd Offline BootCamp ∙ Seoul, Korea',
		links: [],
		subTitle: '',
		description: [
			`Read Modern JavaScript Deep Dive (926 pages) in 1 month`,
			`Studied React using official document website`,
			`Took 3 rounds of Pair Programming using vanilla JavaScript and React`,
			`Collaborated with team for final team project (FineApple) using React and a variety of libraries`,
		],
		startDate: new Date('2023-01'),
		endDate: new Date('2023-05'),
	},
];

export default devExperience;
