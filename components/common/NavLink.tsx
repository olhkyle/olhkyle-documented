import { BLOG } from '@/constants/url';
import Link from 'next/link';

interface NavLinkProps {
	link: string;
	currentPath: string;
	onClick?: () => void;
}

export default function NavLink({ link, currentPath, onClick }: NavLinkProps) {
	const isNavLinkCurrentPath: string =
		currentPath === link.toLowerCase()
			? 'bg-black text-white dark:bg-white dark:text-black'
			: 'bg-white text-black dark:bg-dark dark:text-white';

	return (
		<div
			className={`relative flex items-center px-2 py-1 text-xl font-bold ${isNavLinkCurrentPath} cursor-pointer hover:underline hover:underline-offset-[8px] min-w-[110px] clip-path-outer clip-path-button`}
			onClick={onClick}>
			<Link href={link === 'Blog' ? BLOG : `/${link.toLowerCase()}`} className="w-full p-2">
				{link}
			</Link>
		</div>
	);
}
