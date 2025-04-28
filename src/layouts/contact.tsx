import type { PropsWithChildren } from "react";

import { Bio } from "@/components/bio";

import { RootLayout } from "./root";

export function ContactLayout({ children }: PropsWithChildren) {
	return (
		<div className="w-svw h-svh bg-gradient-red-dash pl-20 text-white flex items-center">
			<div className="max-w-md w-full">{children}</div>
			<div className="h-full flex-1 flex items-center self-center w-full perspective-normal relative overflow-hidden">
				<div className="h-full w-full -rotate-y-[18deg] 2xl:rotate-[30deg] opacity-80 text-xs!">
					<RootLayout>
						<Bio />
					</RootLayout>
				</div>
			</div>
		</div>
	);
}
