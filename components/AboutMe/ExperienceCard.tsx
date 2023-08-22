import { CardTitle } from '.';
import { CLASS101, DESIGNTHOU } from '../../constants/url';

import formattedDate from '../../utils/formattedDate';
import Link from 'next/link';

interface Experience {
	ENTitle: string;
	KRTitle: string;
	ENPlace: string;
	KRPlace?: string;
	ENContent: string;
	KRContent: string;
	startDate: Date;
	endDate: Date | 'Current' | '';
	link?: string;
}

const experience: Experience[] = [
	{
		ENTitle: 'Zerobase FrontEnd Offline Bootcamp',
		KRTitle: '제로베이스 프론트엔드 오프라인 과정',
		ENPlace: '',
		KRPlace: '',
		ENContent: 'Pair Programming, Team Project',
		KRContent: '페어 프로그래밍, 팀 프로젝트',
		startDate: new Date(2023, 1),
		endDate: new Date(2023, 5),
	},
	{
		ENTitle: 'Programming Operator',
		KRTitle: '개발 및 보안 담당자',
		ENPlace: '@DesignThou',
		KRPlace: '디자인도우',
		link: DESIGNTHOU,
		ENContent: 'Architecture Content Platform Operation',
		KRContent: '건축 컨텐츠 플랫폼 운영',
		startDate: new Date(2022, 2),
		endDate: 'Current',
	},
	{
		ENTitle: 'Producer of Architecture Online Course',
		KRTitle: '건축 온라인 클래스 제작/운영자',
		ENPlace: '@Class101',
		KRPlace: '클래스 101',
		ENContent: 'Architecture All in One Class with Sketchup',
		KRContent: '[건축 올인원] 휙, 사로잡는 건축 디자인 클래스',
		startDate: new Date(2021, 6),
		endDate: 'Current',
		link: CLASS101,
	},
	{
		ENTitle: 'Certificate',
		KRTitle: '자격증',
		ENPlace: '@Interior Design Certificate',
		KRPlace: '실내건축산업기사',
		ENContent: 'HRDK, Korea',
		KRContent: '한국산업인력공단, 대한민국',
		startDate: new Date(2020, 11),
		endDate: '',
	},
	{
		ENTitle: 'Exchange Student',
		KRTitle: '교환학생',
		ENPlace: '@Technische HochSchule Augsburg',
		KRPlace: 'Technische HochSchule Augsburg',
		ENContent: 'Augsburg, Germany',
		KRContent: '아우크스부르크, 독일',
		startDate: new Date(2019, 3),
		endDate: new Date(2019, 9),
	},
];

export default function ExperienceCard() {
	return (
		<div className="mt-8 p-4 px-6 pb-8 rounded-[2rem] bg-gray-50 dark:bg-gray-900 sm:bg-none">
			<CardTitle>Experience</CardTitle>
			<ul className="flex flex-col gap-6 mt-5 break-keep text-lg">
				{experience.map(({ ENTitle, ENPlace, ENContent, startDate, endDate, link }) => (
					<li key={ENTitle} className="flex flex-col text-base sm:text-lg">
						<div className="text-base responsive-text-gray">{formattedDate({ startDate, endDate })}</div>
						<div className="flex flex-col">
							<div className="font-semibold responsive-text-gray">
								<span className="text-lg">
									{ENTitle} {link && '∙'}{' '}
								</span>
								<Link
									href={link ? link : '#'}
									target={link ? '_blank' : ''}
									className={link ? 'cursor-pointer' : 'cursor-default'}>
									<span
										className={`${
											link ? 'text-bold underline underline-offset-4 decoration-blue-200 hover:text-blue-200' : ''
										}`}>
										<span>{ENPlace}</span>
									</span>
								</Link>
							</div>
							<span className="mt-1 text-base responsive-text-gray">{ENContent}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
