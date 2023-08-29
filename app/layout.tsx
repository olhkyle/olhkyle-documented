import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Footer, Nav, ScrollToTopButton } from '@/components';
import { Schibsted_Grotesk } from 'next/font/google';

export const metadata: Metadata = {
	title: 'Olhkyle',
	description: `About kyle`,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'var(--color-dark)' },
		{ media: '(prefers-color-scheme: dark)', color: 'var(--color-white)' },
	],
};

const schibsted_Grotesk = Schibsted_Grotesk({
	weight: ['400', '500', '600', '700', '800', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	// Dark Mode -> CSR & SSR synchronization
	const script = `
			(function(){
				const savedTheme = localStorage.getItem('theme');
				const isDark = window.matchMedia('(prefers-color-scheme: dark)');

				const theme = savedTheme ?? (isDark.matches ? 'dark' : 'light');

				const setTheme = (newTheme) => {
					if (newTheme === 'dark') {
						document.body.dataset.theme = 'dark';
					} else {
						document.body.dataset.theme = 'light';
					}

					localStorage.setItem('theme', newTheme);
				};

				isDark.addListener((e) => {
					setTheme(e.matches ? 'dark' : 'light');
				});

				setTheme(theme);
			})();
	`;

	return (
		<html lang="en">
			<head>
				<link rel="icon" type="image/*" href="/favicon.ico" />
				<meta name="description" content="FrontEnd Developer Kyle's Web" />
				<meta property="og:title" content="Olhkyle" />
				<meta property="og:description" content="FrontEnd Developer Kyle's Web" />
				<meta property="og:type" content="website" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
				/>
				<meta name="theme-color" content="#fff" media="(prefers-color-scheme: light)" />
				<meta name="theme-color" content="#090b16" media="(prefers-color-scheme: dark)" />
			</head>
			<body className={schibsted_Grotesk.className} suppressHydrationWarning={true}>
				<Nav />
				<main className="mx-auto px-[2rem] h-full sm:w-[640px] md:w-[768px] lg:w-[1024px]">{children}</main>
				<Footer />
				<ScrollToTopButton topPosToStartShowing={300} />
				<script dangerouslySetInnerHTML={{ __html: script }} />
			</body>
		</html>
	);
}
