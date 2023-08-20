interface CalloutProps {
	margin?: string;
	content: string;
	backgroundColor: string;
}

export default function Callout({ margin, content, backgroundColor }: CalloutProps) {
	return (
		<div className={`flex gap-2 ${margin} mr-2 p-2 border-[1px] border-gray-300 rounded-lg ${backgroundColor}`}>
			<span>💿</span>
			<p className="responsive-text-gray">{content}</p>
		</div>
	);
}
