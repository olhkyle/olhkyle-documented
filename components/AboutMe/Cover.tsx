import Link from 'next/link';

export default function Cover() {
	return (
		<div className="my-10 font-medium break-keep text-base text-gray-300 sm:text-lg sm:my-20">
			<p className="py-2 px-2">
				I work as a <span className="font-bold">Web Developer and Spatial Designer</span> at a company called{' '}
				<Link href="https://205company.com" className="font-bold underline hover:text-blue-100">
					205 COMPANY
				</Link>
				, which handles{' '}
				<Link href="https://obscura-store.com/" className="font-bold underline hover:text-blue-100">
					OBSCURA
				</Link>
				,{' '}
				<Link href="https://youth-lab.kr/" className="font-bold underline hover:text-blue-100">
					YOUTH
				</Link>
				,{' '}
				<Link href="https://1011gallery.kr/" className="font-bold underline hover:text-blue-100">
					1011 Gallery
				</Link>
				, and{' '}
				<Link href="https://oude.kr/" className="font-bold underline hover:text-blue-100">
					Oude
				</Link>
				. I mainly manage and design products and space.{' '}
			</p>
			<p className="py-2 px-2">
				I originally studied Architecture and have experience as an Architectural Intern at{' '}
				<Link href="http://www.gansam.com/" className="font-bold underline hover:text-blue-100">
					Gansam Architect and Partners
				</Link>
				.
			</p>
			<p className="py-2 px-2">
				As side work, I take on the role of Web Developer at the Architecture platform{' '}
				<Link href="https://designthou.com/" className="font-bold underline hover:text-blue-100">
					DesignThou
				</Link>
				. And I have experience creating instructional videos for Architectural programs as a lecturer on the platform
				called{' '}
				<Link href="https://class101.net/" className="font-bold underline hover:text-blue-100">
					CLASS101
				</Link>
				.
			</p>
			<p className="py-2 px-2">
				I am fluent in conversational English and can use everyday German. I have lived in Germany for about a year.
			</p>
			<p className="py-2 px-2">
				On my days off, I love to drink good coffee and watch movies or dramas. I have a passion for travel and have
				visited many cities with beautiful natural landscapes and clean urban scenery. I mostly travel to the United
				States and Europe.
			</p>
		</div>
	);
}
