import { EmphasisCircle } from '../../common';

interface DoubleSubTitleProps {
	children: React.ReactNode;
}

export default function DoubleSubTitle({ children }: DoubleSubTitleProps) {
	return (
		<h2 className="mb-2 text-2xl font-bold">
			{children} <EmphasisCircle />
		</h2>
	);
}
