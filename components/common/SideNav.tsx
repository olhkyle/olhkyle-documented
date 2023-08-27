'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';
import { MdArrowRight } from 'react-icons/md';
import links from '../../constants/links';
import { NavLink, ThemeButton } from '.';
import { GMAIL } from '../../constants/url';

interface SideNavProps {
	isActive: boolean;
	toggleActive: () => void;
}

export default function SideNav({ isActive, toggleActive }: SideNavProps) {
	const pathname = usePathname();

	return (
		<div
			className={`fixed -right-[280px] top-0 flex flex-col w-[280px] h-full border-l-[1px] border-l-gray-300 dark:border-l-gray-600 bg-white transition-transform ${
				isActive ? '-translate-x-[280px]' : 'translate-x-0'
			} duration-500 z-50 dark:bg-dark md:hidden`}>
			<div className="flex justify-between items-center w-full h-[80px] border-b-[1px] border-b-gray-300 dark:border-b-gray-600">
				<button className="p-4" onClick={toggleActive}>
					<FiArrowLeft size="27" />
				</button>
				<h1 className="mr-4 text-xl text-center font-semibold cursor-pointer" onClick={toggleActive}>
					<Link href="/" className="py-1 px-2">
						💿 LHKYLE
					</Link>
				</h1>
				<ThemeButton position="sideNav" />
			</div>

			<div className="flex h-full">
				<div className="flex flex-col justify-between w-full">
					<ul className="flex flex-col gap-2 p-5">
						{links.map((link, idx) => (
							<li key={idx}>
								<NavLink link={link} currentPath={pathname.slice(1)} onClick={toggleActive} />
							</li>
						))}
					</ul>
					<div className="p-5">
						<div className="mb-2">
							<h2 className="font-bold">Hyukmin Kwon (Kyle)</h2>
						</div>
						<div>
							<p className="flex items-center">
								<MdArrowRight size="18" />
								<span>{GMAIL}</span>
							</p>
							<p className="flex items-center">
								<MdArrowRight size="18" />
								<span>Seoul, Korea</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
