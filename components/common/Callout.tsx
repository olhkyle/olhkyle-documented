import React from 'react';

interface CalloutProps {
	margin?: string;
	content: string;
}

export default function Callout({ margin, content }: CalloutProps) {
	return (
		<div className={`flex gap-2 ${margin} mr-2 p-2 border-[1px] border-gray-300 rounded-lg`}>
			<span>💿</span>
			<p className="responsive-text-gray">{content}</p>
		</div>
	);
}
