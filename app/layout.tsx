import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Footer, Nav, ScrollToTopButton } from '@/components';
import ThemeProvider from './providers';

export const metadata: Metadata = {
	title: 'Olhkyle',
	description: `About kyle`,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#090B16' },
		{ media: '(prefers-color-scheme: dark)', color: '#fff' },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
			</head>
			<body>
				<ThemeProvider>
					<Nav />
					<main className="mx-auto px-[1rem] h-full sm:w-[640px] md:w-[768px] lg:w-[1024px]">{children}</main>
					<Footer />
					<ScrollToTopButton topPosToStopShowing={300} />
				</ThemeProvider>
			</body>
		</html>
	);
}
