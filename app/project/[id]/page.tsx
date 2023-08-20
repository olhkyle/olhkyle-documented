'use client';

import { components } from '@/app/mdx/components';
import { MDXProvider } from '@mdx-js/react';
import FineAppple from '@/app/mdx/project/FineApple.mdx';
import VanillaTrello from '@/app/mdx/project/VanillaTrello.mdx';
import ESC from '@/app/mdx/project/ESC.mdx';
import { MDXComponents } from 'mdx/types';

export default function Project({ params }: { params: { id: string } }) {
	return (
		<>
			<style jsx>
				{`
					.markdown-body {
						padding: 2rem;
					}
				`}
			</style>
			<MDXProvider components={components as MDXComponents}>
				<div className="markdown-body">
					{params.id === 'Vanilla-Trello' && <VanillaTrello />}
					{params.id === 'FineApple' && <FineAppple />}
					{params.id === 'ESC' && <ESC />}
					<p className="mt-2 text-xl">🚀 contents will update soon</p>
				</div>
			</MDXProvider>
		</>
	);
}
