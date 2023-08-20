import DoubleSubTitle from './titles/DoubleSubTitle';
import { BLOG, GITHUB, LINKEDIN } from '../../constants/url';

const SLICE_INDEX_OF_STRING = 8;

export default function LinksCard() {
	return (
		<div className="col-span-1 mt-5 sm:mt-10">
			<DoubleSubTitle>Links</DoubleSubTitle>
			<ul className="flex flex-col gap-1">
				<li className="underline underline-offset-4 decoration-blue-200 hover:text-blue-200 cursor-pointer">
					<a href={GITHUB} target="_blank">
						{GITHUB.slice(SLICE_INDEX_OF_STRING)}
					</a>
				</li>
				<li className="underline underline-offset-4 decoration-blue-200 hover:text-blue-200 cursor-pointer">
					<a href={LINKEDIN} target="_blank">
						{LINKEDIN.slice(SLICE_INDEX_OF_STRING)}
					</a>
				</li>
				<li className="underline underline-offset-4 decoration-blue-200 hover:text-blue-200 cursor-pointer">
					<a href={BLOG} target="_blank">
						{BLOG.slice(SLICE_INDEX_OF_STRING)}
					</a>
				</li>
			</ul>
		</div>
	);
}
