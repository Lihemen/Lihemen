import type { PropsWithChildren } from "react";

export function ContactLayout({ children }: PropsWithChildren) {
	return (
		<div className="w-svw h-svh bg-gradient-red-dash px-20 text-white flex items-center">
			<div className="max-w-md w-full">{children}</div>
			<div className="h-full">Scene</div>
		</div>
	);
}
