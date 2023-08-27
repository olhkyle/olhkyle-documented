export interface Education {
	id: string;
	title: string;
	subTitle: string;
	description: string[] | null;
	startDate: Date;
	endDate: Date;
}

const education: Education[] = [
	{
		id: '1',
		title: 'School of Architecture, Kookmin University ∙ Seoul, Korea',
		subTitle: 'B.Arch, Architectural System',
		description: null,
		startDate: new Date('2015-03'),
		endDate: new Date('2023-02'),
	},
	{
		id: '2',
		title: 'Technische Hochschule Augsburg∙Augsburg, Germany',
		subTitle: 'Exchange Student Program, Architecture',
		description: null,
		startDate: new Date('2019-03'),
		endDate: new Date('2019-08'),
	},
];

export default education;
