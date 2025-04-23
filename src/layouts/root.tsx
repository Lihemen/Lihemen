import type { PropsWithChildren } from "react";

import { AboutMe } from "@/components/about_me";
import { ActiveQuest } from "@/components/active_quest";
import { Corners } from "@/components/corners";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";

export function RootLayout({ children }: PropsWithChildren) {
	return (
		<main
			id="root-layout"
			className="bg-gradient-red-dash text-white flex flex-col h-dvh overflow-auto px-10"
		>
			<Header />
			<main className="flex w-full gap-4 h-full max-h-4/5">
				<AboutMe />
				<div className="flex-1 border border-white/13 relative">
					<Corners />
					{children}
					<Navigation />
				</div>
				<ActiveQuest />
			</main>
		</main>
	);
}
