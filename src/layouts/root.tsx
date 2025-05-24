import type { PropsWithChildren } from "react";

import { AboutMe } from "@/components/about_me";
import { ActiveQuest } from "@/components/active_quest";
import { Corners } from "@/components/corners";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { MobileNavigation } from "@/components/navigation/mobile";

export function RootLayout({ children }: PropsWithChildren) {
	return (
		<>
			<main
				id="root-layout"
				className="relative bg-gradient-red-dash text-white flex flex-col h-svh overflow-auto px-4 md:px-6 lg:px-10 pt-10 lg:pt-0"
			>
				<Header />
				<section className="flex flex-col lg:flex-row w-full gap-4 h-full max-h-4/5">
					<AboutMe />
					<div className="flex-1 border border-white/13 relative order-first lg:order-[unset]">
						<Corners />
						{children}
						<Navigation />
					</div>
					<ActiveQuest />
				</section>
				<MobileNavigation />
			</main>
		</>
	);
}
