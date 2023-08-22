interface MainTitleProps {
	children: React.ReactNode;
}

export default function MainTitle({ children }: MainTitleProps) {
	return <h2 className="mt-6 text-[57px] font-bold break-keep sm:text-8xl sm:mt-0">{children}</h2>;
}
