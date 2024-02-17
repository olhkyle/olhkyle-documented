interface HighlightTextProps {
	fontSize?: string;
	fontWeight?: string;
	children: React.ReactNode;
}

export default function HighlightText({ fontSize = 'base', fontWeight = 'normal', children }: HighlightTextProps) {
	return (
		<span
			className={`px-[6px] py-[2px] bg-gray-200 text-${fontSize} font-${fontWeight} text-blue-200 rounded-[10px] bg-highlight`}>
			{children}
		</span>
	);
}
