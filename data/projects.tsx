import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import { BiMovie } from 'react-icons/bi';
import {
	ESC_DEMO,
	ESC_GITHUB,
	EXPACE_GITHUB,
	FINEAPPLE_DEPLOY,
	FINEAPPLE_GITHUB,
	FINEAPPLE_RETROSPECT,
	TRELLO_DEPLOY,
	TRELLO_GITHUB,
} from '../constants/url';

import { StaticImageData } from 'next/image';
import { thumbnails } from '@/constants/thumbnails';

export interface Project {
	title: string;
	subtitle: string;
	team: boolean;
	composition: string;
	wip: boolean;
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
	mainFeatures: { title: string; content: string[] }[];
}

export interface ProjectWithThumbnail extends Project {
	thumbnail: StaticImageData;
}

const [expaceMock, trelloMock, fineappleMock, escMock] = thumbnails;

const projects: ProjectWithThumbnail[] = [
	{
		title: 'ExPace',
		subtitle: '',
		team: false,
		wip: true,
		startDate: new Date('2023-08-10'),
		endDate: '',
		composition: '',
		thumbnail: expaceMock,
		links: [
			{
				title: 'Github',
				href: EXPACE_GITHUB,
				icon: <AiOutlineGithub size="22" />,
			},
		],
		callout: '',
		overviewEN: 'Space Travel Experience Application with Reservation',
		overviewKR: '우주 여행 예약 서비스',
		myTasks: ['Make Space Travel Service Application with React'],
		improvement: ['Work In Progress'],
		techStacks: [
			'React',
			'TypeScript',
			'React Query',
			'Zustand',
			'Emotion',
			'Framer-Motion',
			'Zod',
			'React-Hook-Form',
			'Storybook',
			'Vite',
			'Jest',
		],
		mainFeatures: [
			{
				title: '👨‍🚀 Spaceship Reservation Service',
				content: [],
			},
			{
				title: '🔦 Space Info (e.g. Planet, Star)',
				content: [],
			},
			{
				title: '💿 SignIn',
				content: [],
			},
			{
				title: '💻 SignUp',
				content: [],
			},
		],
	},
	{
		title: 'Vanilla Trello',
		subtitle: '',
		team: false,
		wip: false,
		startDate: new Date('2023-06-20'),
		endDate: new Date('2023-08-06'),
		composition: '',
		thumbnail: trelloMock,
		links: [
			{
				title: 'Github',
				href: TRELLO_GITHUB,
				icon: <AiOutlineGithub size="22" />,
			},
			{
				title: 'Deployed Link',
				href: TRELLO_DEPLOY,
				icon: <AiOutlineLink size="22" />,
			},
		],
		callout: '',
		overviewEN: 'Trello Clone project using Vanilla JavaScript only',
		overviewKR: '바닐라 자바스크립트로만 구현한 Trello',
		myTasks: [
			'Implemented SPA (Single Page Application) using Vanilla JavaScript without any libraries or frameworks',
			`Created a diffing algorithm similar to React's Reconciliation`,
			`Designed a CBD library based on the implemented diffing algorithm, using Class (ES6+) syntax`,
			`Implemented various DOM event interactions using event delegation`,
		],
		improvement: ['currently refactoring'],
		techStacks: ['HTML', 'SASS', 'JavaScript', 'lodash'],
		mainFeatures: [
			{
				title: 'List',
				content: ['Create New List', 'Update List Title TextArea Content', 'Delete List', 'Drag & Drop between Lists'],
			},
			{
				title: 'Card',
				content: [
					'Add a new Card with setting the title of Card',
					'Click Card and open Modal to update Card Title Content',
					'Delete Card',
					'Drag & Drop Card within the boundary of one List or from different Lists',
				],
			},
			{
				title: 'Modal',
				content: [
					'Update Card Title Content',
					'Add detailed Description one-to-one correspondence to Card and show Icon if the description is added.',
				],
			},
		],
	},
	{
		title: 'FineApple',
		subtitle: '',
		team: true,
		wip: false,
		startDate: new Date('2023-04-17'),
		endDate: new Date('2023-05-23'),
		composition: '3 FE',
		thumbnail: fineappleMock,
		links: [
			{ title: 'Github', href: FINEAPPLE_GITHUB, icon: <AiOutlineGithub size="22" /> },
			{
				title: 'Deployed Link',
				href: FINEAPPLE_DEPLOY,
				icon: <AiOutlineLink size="22" />,
			},
			{
				title: 'Collaboration History',
				href: FINEAPPLE_RETROSPECT,
				icon: <AiOutlineLink size="22" />,
			},
		],
		callout: `If you want to try to use Deployed Service, you have to register because of Firebase's security rule.`,
		overviewEN: 'Community Web Application related to Computer / IT and Game topics',
		overviewKR: '컴퓨터 / IT, 게임 주제 관련 커뮤니티 서비스',
		myTasks: [
			`Implemented declarative components for building Concurrent UI Patterns using React Query and Suspense.`,
			'Developed AutoComplete UI Component based on keyword search for titles of questions and selected topics in the Select component',
			'Implemented Infinite Scroll to fetch a page unit list of topic-related questions',
			'Deployed Frontend with Firebase and Github Actions',
			'Created UI guidelines for colors, font styles, component styling, and layout',
		],
		improvement: [
			'Controlled Routing based on user info and login status, using Higher Order Component(HOC) , such as AuthenticationGuard Component',
			`Improved code to proactively fetch Data from the Server and quickly show User a UI with server status, using Loader in React-Router-Dom`,
			'Improved unnecessary Refetch by introducing React Query to manage server state and cache',
			`Introduced Firebase's Auth, Firestore, Storage and refactored it to enable actual service operation and deployment, after implementing mock server using Node.js and Express.js`,
		],
		techStacks: [
			'React',
			'JavaScript',
			'React Query',
			'Recoil',
			'Vite',
			'Yarn',
			'Emotion',
			'Mantine',
			'Zod',
			'React-Hook-Form',
			'Firebase',
			'Github Actions',
		],
		mainFeatures: [
			{
				title: 'Auth',
				content: [`Login`, 'SignUp', 'Edit Profile'],
			},
			{
				title: 'Theme',
				content: [`light & dark mode`],
			},
			{
				title: 'Search',
				content: [`Search for questions related to the topics you're interested in`],
			},
			{
				title: 'Question',
				content: [
					`Create a question if you don't see what you're looking for`,
					`Provide a list of questions related to the topic`,
					`Provide a list of popular articles related to the topic`,
					`Provide Like Feature to collect my liked Questions`,
					`Provide a list of questions which I pressed the like button`,
				],
			},
			{ title: 'Comment', content: [`Reply to a question`, `Provide Like Feature on Comment`] },
			{
				title: 'Rank & Reward',
				content: [
					`Give points to people who contribute to the community (ask questions, replies comment to post)`,
					`Provide a ranking UI based on points and levels `,
				],
			},
		],
	},
	{
		title: 'ESC',
		subtitle: '(Easy Sports Club)',
		team: true,
		wip: false,
		startDate: new Date('2022-11-20'),
		endDate: new Date('2022-12-30'),
		composition: '2 FE & 3 BE',
		thumbnail: escMock,
		links: [
			{
				title: 'Github',
				href: ESC_GITHUB,
				icon: <AiOutlineGithub size="22" />,
			},
			{
				title: 'Demo Video',
				href: ESC_DEMO,
				icon: <BiMovie size="22" />,
			},
		],
		callout: '',
		overviewEN: 'Web Application of location-based gym search, booking, and goods rental',
		overviewKR: '위치 기반 체육관 검색, 예약 및 스포츠 용품 대여 서비스',
		myTasks: [
			`Developed User Authentication-related features and UI, such as Login, Signup, Forgot-Password, and Member Detail pages`,
			`Implemented Social Login with JWT and OAuth 2.0`,
			`Developed a gym booking page using conditional rendering by steps`,
			`Implemented gym bookmark, reservation, and notification history pages with Server State and Cache Management using RTK Query`,
			`Designed wireframe for a consistent UI`,
		],
		improvement: [
			`Enhanced collaborative productivity by designing highly reusable UI elements like button and input as Atom unit`,
			`Refactored by declaring TypeScript Interface type with redundant properties and extending it to reduce unnecessary type declaration code`,
			`Defined style-related types and palette constants, and writed code to implement a consistent UI.`,
		],
		techStacks: [
			'React',
			'TypeScript',
			'Redux Toolkit',
			'RTK Query',
			'Vite',
			'Yarn',
			'Emotion',
			'Github Actions',
			'AWS Cloudfront/S3',
		],
		mainFeatures: [
			{
				title: 'Auth',
				content: [`Login(User | Manager)`, 'SignUp', 'Social Login', 'Find My Password', 'My Page'],
			},
			{
				title: 'User Access',
				content: [`Notification`, `Reservation List`, `Bookmark List`, `Recently Viewed Gyms`],
			},
			{
				title: 'User Action',
				content: [
					`Use GeoLocation to find registered gyms within 3 kilometers of you`,
					`Find basic information about the gym and its rating`,
					`Read reviews to see what people have to say about the gym`,
					`Make a Reservation of Gym and rent goods`,
					`Write a review of gym after use`,
					`Bookmark gyms`,
				],
			},
			{
				title: 'Manager Access',
				content: [`Notification`, `Reservation List`],
			},
			{
				title: 'Manager Action',
				content: [`Register manager's own gym`, `Check Reservation Status of each gym`],
			},
		],
	},
];

export default projects;
