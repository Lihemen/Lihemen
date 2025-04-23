export function Corners() {
	return (
		<>
			<svg
				className="absolute -top-0.25 -left-0.25 w-3 h-3 text-red-1 pointer-events-none"
				viewBox="0 0 10 10"
				fill="none"
			>
				<title>Corner</title>
				<path d="M0,10 L0,0 L10,0" stroke="currentColor" strokeWidth="4" />
			</svg>
			<svg
				className="absolute -top-0.25 -right-0.25 w-3 h-3 text-red-1 pointer-events-none"
				viewBox="0 0 10 10"
				fill="none"
			>
				<title>Corner</title>
				<path d="M0,0 L10,0 L10,10" stroke="currentColor" strokeWidth="4" />
			</svg>
			<svg
				className="absolute -bottom-0.25 -left-0.25 w-3 h-3 text-red-1 pointer-events-none"
				viewBox="0 0 10 10"
				fill="none"
			>
				<title>Corner</title>
				<path d="M0,0 L0,10 L10,10" stroke="currentColor" strokeWidth="4" />
			</svg>
			<svg
				className="absolute -bottom-0.25 -right-0.25 w-3 h-3 text-red-1 pointer-events-none"
				viewBox="0 0 10 10"
				fill="none"
			>
				<title>Corner</title>
				<path d="M0,10 L10,10 L10,0" stroke="currentColor" strokeWidth="4" />
			</svg>
		</>
	);
}
