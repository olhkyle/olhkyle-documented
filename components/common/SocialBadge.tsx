import Link from 'next/link';
import { SocialLink } from './Footer';

interface SocialBadgeProps {
	linkHref: string;
	name: SocialLink['name'];
	children: React.ReactElement;
	onClick?: () => void;
}

const SocialBadge = ({ linkHref, name, children }: SocialBadgeProps) => {
	return (
		<Link href={linkHref} target="_blank" rel="noopener noreferrer" aria-label={name}>
			<div className="p-1">{children}</div>
		</Link>
	);
};

export default SocialBadge;
