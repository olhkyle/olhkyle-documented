import { Education } from './education';
import { v4 as uuid4 } from 'uuid';

export interface DevExperience extends Education {
	links: string[];
}

const devExperience: DevExperience[] = [
	{
		id: uuid4(),
		title: '205Company ∙ Seoul, Korea',
		links: [],
		subTitle: '',
		description: [
			`Control whole engineering problems of Online Shop(OBSCURA, YOUTH) as Web Developer`,
			`Use JQuery and Vanilla JavaScript to control Full-Stack Environment as Web Developer`,
			`Design OBSCURA Offline Space(Suwon Starfield and Paju Premium Outlet) as Space Designer`,
			`Manage and design product(fashion, space)`,
		],
		startDate: new Date('2023-11'),
		endDate: 'Current',
	},
];

export default devExperience;
