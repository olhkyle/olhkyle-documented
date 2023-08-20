interface ProjectTitleProps {
	children: React.ReactNode;
}

export default function ProjectTitle({ children }: ProjectTitleProps) {
	return <h2 className="mt-2 text-3xl font-semibold">{children}</h2>;
}
