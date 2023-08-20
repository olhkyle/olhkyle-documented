import { GradientSquare } from '../common';

export default function _Project() {
	return (
		<div className="flex flex-col items-center gap-10 mx-auto my-10 py-10 px-5 rounded-[2rem] bg-gray-50 dark:bg-dark text-center sm:rounded-full">
			<div className="text-xl sm:text-2xl underline decoration-blue-200">
				{`Currently, this page being prepared 👷🏻‍♂️`}
			</div>
			<GradientSquare />
		</div>
	);
}
