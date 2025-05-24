import { motion } from "motion/react";
import type { PropsWithChildren } from "react";

import { AboutMe } from "@/components/about_me";
import { ActiveQuest } from "@/components/active_quest";
import { Corners } from "@/components/corners";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { MobileNavigation } from "@/components/navigation/mobile";
import { useLocation } from "@tanstack/react-router";

export function RootLayout({ children }: PropsWithChildren) {
	const location = useLocation();

	return (
		<>
			<motion.main
				key={location.pathname}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ ease: "easeInOut", duration: 2000 }}
				id="root-layout"
				className="bg-gradient-red-dash text-white flex flex-col h-svh overflow-auto px-4 md:px-6 lg:px-10 pt-10 lg:pt-0"
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
			</motion.main>
			<MobileNavigation />
		</>
	);
}
