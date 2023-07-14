import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import { BiMovie } from 'react-icons/bi';
import {
	ESC_DEMO,
	ESC_GITHUB,
	FINEAPPLE_DEPLOY,
	FINEAPPLE_GITHUB,
	FINEAPPLE_RETROSPECT,
	TRELLO_DEPLOY,
	TRELLO_GITHUB,
} from '../constants/url';

const projects: Project[] = [
	{
		title: 'Vanilla Trello',
		subtitle: '',
		team: false,
		startDate: new Date(2023, 6, 20),
		endDate: '',
		composition: '',
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
	},
	{
		title: 'FineApple',
		subtitle: '',
		team: true,
		startDate: new Date(2023, 4, 17),
		endDate: new Date(2023, 5, 23),
		composition: '3 FE',
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
			'Recoil',
			'React Query',
			'Vite',
			'Yarn',
			'Emotion',
			'Mantine',
			'Zod',
			'React-Hook-Form',
			'Firebase',
			'Github Actions',
		],
	},
	{
		title: 'ESC',
		subtitle: '(Easy Sports Club)',
		team: true,
		startDate: new Date(2022, 11, 20),
		endDate: new Date(2022, 12, 30),
		composition: '2 FE & 3 BE',
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
	},
];

export default projects;
