import Link from 'next/link';
import formattedDate from '../../utils/formattedDate';
import { DevExperience } from '@/data/devExperience';

interface DevExperienceProps {
	experience: DevExperience;
}

export default function DevExperience({
	experience: { title, subTitle, description, startDate, endDate },
}: DevExperienceProps) {
	return (
		<li className="flex flex-col">
			<span className="font-medium">{formattedDate({ startDate, endDate })}</span>
			<h4 className="text-lg font-medium sm:text-xl sm:font-semibold">
				<Link href="https://205company.com" className="font-bold hover:underline underline-offset-2">
					{title}
				</Link>
			</h4>
			{subTitle && <p>{subTitle}</p>}
			<ul>{description?.map(desc => <li key={desc}>- {desc}</li>)}</ul>
		</li>
	);
}
