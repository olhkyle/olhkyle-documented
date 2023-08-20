interface SpacerProps {
	direction?: 'horizontal' | 'vertical';
	size: number;
}

export default function Spacer({ direction = 'horizontal', size, ...props }: SpacerProps) {
	const width = direction === 'horizontal' ? `w-${size}` : '';
	const height = direction === 'vertical' ? `w-full h-${size}` : '';

	return <div className={`${width} ${height}`} {...props}></div>;
}
