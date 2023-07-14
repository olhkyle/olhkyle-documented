interface HighlightTextProps {
	children: React.ReactNode;
}

export default function HighlightText({ children }: HighlightTextProps) {
	return (
		<span className={`px-[6px] py-[2px] bg-gray-200 text-blue-200 rounded-[10px] dark:bg-gray-300`}>{children}</span>
	);
}
