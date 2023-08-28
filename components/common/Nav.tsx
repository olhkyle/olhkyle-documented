'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import useSideNavActive from '../../hooks/useSideNavActive';
import { NavLink, ThemeButton } from '.';
import links from '../../constants/links';
import usePreventScroll from '../../hooks/usePreventScroll';
import dynamic from 'next/dynamic';

const SideNav = dynamic(() => import('@/components/common/SideNav'), { ssr: false });

export default function Nav() {
	const pathname = usePathname();
	const [isActive, toggleActive] = useSideNavActive();

	usePreventScroll(isActive);

	return (
		<>
			<nav className="sticky top-0 px-[1rem] h-[80px] bg-white/95 dark:bg-dark/95 backdrop-blur sm:bg-white dark:sm:bg-dark sm:backdrop-blur-none z-40">
				<div className="flex justify-between mx-auto md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
					<h1 className="flex-center ml-1 min-w-[130px] min-h-[80px] text-center font-semibold text-2xl cursor-pointer">
						<Link href="/" className="font-bold">
							💿 LHKYLE
						</Link>
					</h1>

					<div className="hidden justify-between items-center gap-10 mt-1 ml-10 px-2 min-w-[440px] md:flex">
						<ul className="flex gap-3 items-center">
							{links.slice(0, 3).map((link, idx) => (
								<li key={idx}>
									<NavLink link={link} currentPath={pathname.slice(1)} />
								</li>
							))}
						</ul>
						<ThemeButton position="nav" />
					</div>
					<button className="p-4 md:hidden" onClick={toggleActive}>
						<RxHamburgerMenu size="27" />
					</button>
				</div>
			</nav>

			<SideNav isActive={isActive} toggleActive={toggleActive} />
			{isActive && (
				<div
					className="fixed top-0 right-0 left-0 bottom-0 backdrop-blur-sm z-40 md:hidden"
					onClick={toggleActive}></div>
			)}
		</>
	);
}
