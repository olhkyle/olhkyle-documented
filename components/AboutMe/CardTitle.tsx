import { EmphasisCircle } from '../common';

interface CardTitleProps {
	children: React.ReactNode;
}

export default function CardTitle({ children }: CardTitleProps) {
	return (
		<h2 className="text-2xl font-semibold">
			{children} <EmphasisCircle />
		</h2>
	);
}
