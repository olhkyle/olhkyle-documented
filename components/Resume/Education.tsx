import formattedDate from '../../utils/formattedDate';

interface EducationProps {
	education: Education;
}

export default function Education({ education: { title, subTitle, description, startDate, endDate } }: EducationProps) {
	return (
		<li className="flex flex-col">
			<span className="responsive-text-gray">{formattedDate({ startDate, endDate })}</span>
			<h4 className="text-lg font-medium sm:text-xl sm:font-semibold">{title}</h4>
			<p>{subTitle}</p>
			<ul>
				{description?.map(desc => (
					<li key={desc} className="responsive-text-gray">
						- {desc}
					</li>
				))}
			</ul>
		</li>
	);
}
