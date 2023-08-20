import DoubleSubTitle from './titles/DoubleSubTitle';
import { GMAIL } from '../../constants/url';

export default function ContactCard() {
	return (
		<div className="col-span-1 mt-10 ">
			<DoubleSubTitle>Contact</DoubleSubTitle>
			<ul className="flex flex-col gap-1">
				<li>{GMAIL}</li>
			</ul>
		</div>
	);
}
