// glitchVariants.ts
export const glitchVariants = {
	initial: {
		opacity: 0,
		x: 0,
		y: 0,
		scale: 0.98,
		filter: "url(#glitchFilter) blur(2px)",
	},
	animate: {
		opacity: 1,
		x: [0, -2, 2, -1, 1, 0],
		y: [0, 1, -1, 0],
		scale: 1,
		filter: "url(#glitchFilter) blur(0px)",
		transition: { duration: 0.8, ease: "easeOut" },
	},
	// exit: {
	// 	opacity: 0,
	// 	x: [0, 4, -4, 2, -2, 0],
	// 	y: [0, -2, 2, 0],
	// 	scale: 1.05,
	// 	filter: "url(#glitchFilter) blur(4px)",
	// 	transition: { duration: 0.6, ease: "easeIn" },
	// },
};
