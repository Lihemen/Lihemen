import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

interface TitleBoxProps extends HTMLAttributes<HTMLDivElement> {
	rightSection?: ReactNode;
}

export function TitleBox({
	title,
	className,
	rightSection = (
		<svg
			width="39.29"
			height="39.37"
			viewBox="0 0 39.29 39.37"
			xmlns="http://www.w3.org/2000/svg"
			className="w-12 h-12 translate-x-1  shrink-0"
		>
			<title>Hexagons</title>
			<g stroke="#000" fill="none" stroke-width="1">
				<polygon points="10,0 19.29,0 24,8.66 19.29,17.32 10,17.32 5.29,8.66" />

				<polygon points="10,21.32 19.29,21.32 24,30 19.29,38.66 10,38.66 5.29,30" />

				<polygon points="28.29,10.66 37.58,10.66 42.29,19.32 37.58,28 28.29,28 23.58,19.32" />
			</g>
		</svg>
	),
	...props
}: TitleBoxProps) {
	return (
		<div
			{...props}
			className={cn(
				"text-lg font-bold font-serif bg-red-1/70 py-1  pl-2 mt-1 text-black flex items-center justify-between gap-4 h-6 overflow-clip uppercase",
				className,
			)}
		>
			<span>{title}</span>
			{rightSection}
		</div>
	);
}
