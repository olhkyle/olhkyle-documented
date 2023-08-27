interface HighlightTextProps {
	fontSize?: string;
	children: React.ReactNode;
}

export default function HighlightText({ fontSize = 'base', children }: HighlightTextProps) {
	return (
		<span className={`px-[6px] py-[2px] bg-gray-200 text-${fontSize} text-blue-200 rounded-[10px] dark:bg-highlight `}>
			{children}
		</span>
	);
}
