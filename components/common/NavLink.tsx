import { BLOG } from '@/constants/url';
import Link from 'next/link';

interface NavLinkProps {
	link: string;
	currentPath: string;
	onClick?: () => void;
}

export default function NavLink({ link, currentPath, onClick }: NavLinkProps) {
	const isNavLinkCurrentPath: string =
		currentPath === link.toLowerCase() ? 'bg-white text-black' : 'bg-dark text-gray-400';

	return (
		<div
			className={`relative flex items-center px-2 py-[2px] text-lg font-bold ${isNavLinkCurrentPath} hover:underline hover:underline-offset-[8px] min-w-[100px] clip-path-button`}
			onClick={onClick}>
			<Link href={link === 'Blog' ? BLOG : `/${link.toLowerCase()}`} className="w-full p-2 cursor-pointer">
				{link}
			</Link>
		</div>
	);
}
