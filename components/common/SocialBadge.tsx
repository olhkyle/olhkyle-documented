import Link from 'next/link';
import React from 'react';

interface SocialBadgeProps {
	linkHref: string;
	children: React.ReactElement;
	onClick?: () => void;
}

const SocialBadge = ({ linkHref, children }: SocialBadgeProps) => {
	return (
		<Link href={linkHref} target="_blank">
			<div className="p-1">{children}</div>
		</Link>
	);
};

export default SocialBadge;
