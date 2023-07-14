import { AAVS, CLASS101, DESIGNTHOU } from '../constants/url';

const etc: Etc[] = [
	{
		id: '1',
		title: 'Architectural Intern',
		department: 'Gansam Architect & Partners',
		description: 'Created CG works and participated in Design Development process with 2 projects',
		startDate: new Date(2022, 7),
		endDate: '',
		link: '',
	},
	{
		id: '2',
		title: 'Architecture Content Platform Operation',
		department: 'DesignThou',
		description:
			'Provide architecture news, CAD/AI source, competition information and diagram tips with managing Wordpress',
		startDate: new Date(2022, 2),
		endDate: 'Present',
		link: DESIGNTHOU,
	},
	{
		id: '3',
		title: 'Production of Architecture Online Course',
		department: 'HYK Studio ∙ CLASS 101',
		description:
			'Produced educational videos to teach whole process of making one architecture project in educational platform',
		startDate: new Date(2021, 6),
		endDate: 'Present',
		link: CLASS101,
	},
	{
		id: '4',
		title: 'Interior Design Certificate',
		department: 'HRDK (Human Resources Development Service of Korea)',
		description: '',
		startDate: new Date(2020, 11),
		endDate: '',
		link: '',
	},
	{
		id: '5',
		title: 'AAVS Social Algorithm',
		department: 'Architectural Association, London & Seoul',
		description:
			'Developed Architectural environment solution to make social aggregation using Algorithm with Archi-tools, Grasshopper with Rhino3d',
		startDate: new Date(2018, 7),
		endDate: '',
		link: AAVS,
	},
];

export default etc;
