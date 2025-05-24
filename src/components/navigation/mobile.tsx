import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "@tanstack/react-router";

import { MusicSettings } from "../controls/music";
import { SoundEffects } from "../controls/sound";
import { VisualSettings } from "../controls/theme";
import { NavLink } from "./navlink";

export function MobileNavigation() {
	const navigate = useNavigate();
	const [opened, { toggle }] = useDisclosure();

	return (
		<>
			<header className="lg:hidden sticky bottom-0 left-0 right-0 w-full z-10 bg-[#0a0a0a]">
				<nav className="flex items-center gap-4 p-2 *:flex-1">
					<button
						type="button"
						onClick={toggle}
						className="border border-white/13 p-3 cursor-pointer active:scale-95 active:border-red-1 uppercase! transition-all"
					>
						Navigation
					</button>
					<button
						type="button"
						onClick={() => navigate({ to: "/about-me" })}
						className="border border-white/13 p-3 cursor-pointer active:scale-95 active:border-red-1 uppercase! transition-all"
					>
						About
					</button>
				</nav>
			</header>

			<Drawer
				onClose={toggle}
				opened={opened}
				size="md"
				bg="red !important"
				title={
					<h6 className="text-4xl font-serif uppercase text-white">
						Navigation
					</h6>
				}
				styles={{
					header: {
						background: "var(--color-black-1)",
						border: "1px solid #333333",
					},
					content: {
						background: "var(--color-black-1)",
						border: "1px solid #333333",
						display: "flex",
						flexDirection: "column",
					},
					body: { height: "100%" },
				}}
			>
				<div className="pt-6 pb-10 flex flex-col justify-between h-full gap-4">
					<div className="grid gap-8">
						<div className="flex items-center justify-center gap-10">
							<div className="inline-flex items-end leading-none font-serif tracking-[7.5%] gap-1">
								<span className="text-2.5xl text-green-4">48</span>{" "}
								<span>Level</span>
							</div>
							<div className="inline-flex items-end leading-none font-serif tracking-[7.5%] gap-1">
								<span className="border border-white/29 w-8 h-8 grid place-content-center mr-4 text-lg text-red-1">
									+
								</span>
								<span className="text-2.5xl text-green-4">1,425</span>{" "}
								<span>Coins awarded</span>
							</div>
						</div>
						<ul className="grid gap-4">
							<NavLink
								to="/bio"
								title="Beginning"
								description="Where the journey first takes flight."
							/>
							<NavLink
								to="/logs"
								title="Logs"
								description="Records of every step and story"
							/>
							<NavLink
								to="/achievements"
								title="Milestones"
								description="Milestones marking progress made."
							/>
							<NavLink
								to="/creations"
								title="Creations"
								description="Projects crafted with care and skill."
							/>
						</ul>
					</div>

					<ul className="flex flex-col gap-2">
						<SoundEffects />
						<MusicSettings />
						<VisualSettings />
					</ul>
				</div>
			</Drawer>
		</>
	);
}
