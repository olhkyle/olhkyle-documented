export default function Spacer({ width = '100%' }: { width: number | '100%' }) {
	return <div className={`w-[${typeof width === 'number' ? `${width}px` : width}] h-20`}></div>;
}
