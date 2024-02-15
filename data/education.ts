export interface Education {
	id: string;
	title: string;
	subTitle: string;
	description: string[] | null;
	startDate: Date;
	endDate: Date | string;
}

const education: Education[] = [
	{
		id: '1',
		title: 'Zerobase FrontEnd Offline BootCamp ∙ Seoul, Korea',
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
	{
		id: '2',
		title: 'School of Architecture, Kookmin University ∙ Seoul, Korea',
		subTitle: 'B.Arch, Architectural System',
		description: null,
		startDate: new Date('2015-03'),
		endDate: new Date('2023-02'),
	},
	{
		id: '3',
		title: 'Technische Hochschule Augsburg∙Augsburg, Germany',
		subTitle: 'Exchange Student Program, Architecture',
		description: null,
		startDate: new Date('2019-03'),
		endDate: new Date('2019-08'),
	},
];

export default education;
