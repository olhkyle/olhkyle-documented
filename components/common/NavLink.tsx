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
			className={`relative flex items-center px-2 py-1 text-xl font-semibold ${isNavLinkCurrentPath} cursor-pointer hover:underline hover:underline-offset-[8px] min-w-[110px]`}
			onClick={onClick}>
			<span className={`absolute -bottom-2.5 -right-2.5 w-5 h-5 bg-white dark:bg-dark rotate-[45deg]`} />
			<Link href={link === 'Blog' ? BLOG : `/${link.toLowerCase()}`} className="w-full p-2">
				{link}.
			</Link>
		</div>
	);
}
