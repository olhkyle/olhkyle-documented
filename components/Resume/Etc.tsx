import { Etc } from '@/data/etc';
import formattedDate from '../../utils/formattedDate';
import { AiOutlineLink } from 'react-icons/ai';

interface EtcProps {
	_etc: Etc;
}

export default function Etc({ _etc: { title, department, description, startDate, endDate, link } }: EtcProps) {
	return (
		<li>
			<span className="font-medium">{formattedDate({ startDate, endDate })}</span>
			<h4 className="text-lg font-medium sm:text-xl sm:font-semibold">{title}</h4>
			<p className="text-base font-medium">
				{link === '' ? (
					<span>{department}</span>
				) : (
					<a href={link} target="_blank">
						<span className="inline-flex items-center gap-1 underline underline-offset-4 decoration-blue-200 font-medium hover:text-blue-200 cursor-pointer">
							<AiOutlineLink size="21" />
							<span>{department}</span>
						</span>
					</a>
				)}
			</p>
			<p className="mt-1">
				{description ? '-' : ''} {description}
			</p>
		</li>
	);
}
