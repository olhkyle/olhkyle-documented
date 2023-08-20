/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				black: 'var(--color-black)',
				white: 'var(--color-white)',
				gray: {
					50: 'var(--color-gray-50)',
					100: 'var(--color-gray-100)',
					200: 'var(--color-gray-200)',
					300: 'var(--color-gray-300)',
					400: 'var(--color-gray-400)',
					500: 'var(--color-gray-500)',
					600: 'var(--color-gray-600)',
					700: 'var(--color-gray-700)',
					800: 'var(--color-gray-800)',
					900: 'var(--color-gray-900)',
				},
				green: {
					100: 'var(--color-green-100)',
					200: 'var(--color-green-200)',
					300: 'var(--color-green-300)',
					400: 'var(--color-green-400)',
				},
				blue: {
					100: 'var(--color-blue-100)',
					200: 'var(--color-blue-200)',
					300: 'var(--color-blue-300)',
				},
				purple: 'var(--color-purple)',
				orange: {
					100: 'var(--color-orange-100)',
					200: 'var(--color-orange-200)',
				},
				red: 'var(--color-red)',
				dark: 'var(--color-dark)',
			},
			fontFamily: {
				sans: ['Neogrotesk', 'Spoqa Han Sans Neo', 'sans-serif', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				// 1rem = 16px
				/** 80px size / 84px high / bold */
				mega: ['5rem', { lineHeight: '5.25rem', fontWeight: '700' }],
				/** 56px size / 62px high / bold */
				h1: ['3.5rem', { lineHeight: '3.875rem', fontWeight: '700' }],
				/** 40px size / 48px high / bold */
				h2: ['2.5rem', { lineHeight: '3rem', fontWeight: '700' }],
				/** 32px size / 36px high / bold */
				h3: ['2rem', { lineHeight: '2.25rem', fontWeight: '700' }],
				/** 28px size / 36px high / bold */
				h4: ['1.75rem', { lineHeight: '2.25rem', fontWeight: '700' }],
				/** 24px size / 32px high / bold */
				h5: ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],
				/** 16px size / 20px high / bold */
				h6: ['1rem', { lineHeight: '1.25rem', fontWeight: '700' }],

				/** 32px size / 36px high / normal */
				'body-2xl': ['2rem', { lineHeight: '2.25rem' }],
				/** 28px size / 36px high / normal */
				'body-xl': ['1.75rem', { lineHeight: '2.25rem' }],
				/** 24px size / 32px high / normal */
				'body-lg': ['1.5rem', { lineHeight: '2rem' }],
				/** 20px size / 28px high / normal */
				'body-md': ['1.25rem', { lineHeight: '1.75rem' }],
				/** 16px size / 20px high / normal */
				'body-sm': ['1rem', { lineHeight: '1.25rem' }],
				/** 14px size / 18px high / normal */
				'body-xs': ['0.875rem', { lineHeight: '1.125rem' }],
				/** 12px size / 16px high / normal */
				'body-2xs': ['0.75rem', { lineHeight: '1rem' }],

				/** 18px size / 24px high / semibold */
				caption: ['1.125rem', { lineHeight: '1.5rem', fontWeight: '600' }],
				/** 12px size / 16px high / bold */
				button: ['0.75rem', { lineHeight: '1rem', fontWeight: '700' }],
			},
			animation: {
				marquee: 'marquee 40s linear infinite',
				marquee2: 'marquee2 40s linear infinite',
				'large-marquee': 'large-marquee 80s linear infinite',
				'large-marquee2': 'large-marquee2 80s linear infinite',
			},
			keyframes: {
				shimmer: {
					'100%': {
						transform: 'translateX(100%)',
					},
				},
				rotate: {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(180deg)' },
				},
				scale: {
					from: { transform: 'scale(0.8)' },
					'90%': { transform: 'scale(1.05)' },
					to: { transform: 'scale(1)' },
				},
				circle: {
					from: { transform: 'scale(0)', strokeWidth: '16px' },
					'50%': { transform: 'scale(0.5)', strokeWidth: '16px' },
					to: { transform: 'scale(1)', strokeWidth: '0px' },
				},
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-400%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(400%)' },
					'100%': { transform: 'translateX(0%)' },
				},
				'large-marquee': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-200%)' },
				},
				'large-marquee2': {
					'0%': { transform: 'translateX(200%)' },
					'100%': { transform: 'translateX(0%)' },
				},
			},
			backdropBlur: {
				sm2: '2px',
			},
		},
	},
	plugins: [],
};
