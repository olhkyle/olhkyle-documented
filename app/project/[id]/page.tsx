'use client';

import { components } from '@/app/mdx/components';
import { MDXProvider } from '@mdx-js/react';
import VanillaTrello from '@/app/mdx/VanillaTrello.mdx';
import { MDXComponents } from 'mdx/types';

export default function Project({ params }: { params: { id: string } }) {
	return (
		<MDXProvider components={components as MDXComponents}>
			{params.id === 'Vanilla-Trello' && <VanillaTrello />}
			{params.id === 'FineApple' && <VanillaTrello />}
		</MDXProvider>
	);
}
