import React from 'react';

export default function GradientSquare() {
	return (
		<div className="relative hidden w-48 h-48 bg-gradient-to-r from-blue-100 to-white md:block">
			<span className="absolute w-32 h-32 bg-white dark:bg-dark rotate-[45deg] z-10" />
		</div>
	);
}
