import type { PropsWithChildren } from "react";

import { Bio } from "@/components/bio";
import { CloseButton } from "@mantine/core";
import { useNavigate } from "@tanstack/react-router";

import { RootLayout } from "./root";

export function ContactLayout({ children }: PropsWithChildren) {
	const navigate = useNavigate();
	return (
		<div className=" h-svh bg-gradient-red-dash px-4 lg:px-0 lg:pl-20 text-white flex items-center">
			<button
				type="button"
				className="lg:hidden absolute top-8 right-4"
				onClick={() => navigate({ to: "/bio" })}
			>
				<CloseButton />
			</button>
			<div className="lg:max-w-md w-full">{children}</div>
			<div className="h-full flex-1 hidden lg:flex items-center self-center w-full perspective-normal relative overflow-hidden">
				<div className="h-full w-full -rotate-y-[18deg] 2xl:rotate-[30deg] opacity-80 text-xs!">
					<RootLayout>
						<Bio />
					</RootLayout>
				</div>
			</div>
		</div>
	);
}
