interface DividerProps {
	marginTop?: string;
}

export default function Divider({ marginTop = 'mt-8' }: DividerProps) {
	return <div className={`h-[0.5px] ${marginTop} bg-gray-300 dark:bg-gray-600`}></div>;
}
