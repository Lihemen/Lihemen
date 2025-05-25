import { Achievement } from "@/components/achievement";
import { RingProgress } from "@mantine/core";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/achievements/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col items-center px-4 py-6 gap-4 bg-gradient-red h-full uppercase overflow-clip">
			<h3 className="uppercase text-center">Achievements.</h3>

			<div className="flex flex-col lg:flex-row gap-4 h-full w-full max-w-3xl justfy-center">
				<div className="lg:w-44 shrink-0 flex flex-col gap-4">
					<div className="border border-white/13 h-40 grid place-items-center justify-center">
						<RingProgress
							rootColor="transparent"
							sections={[
								{ value: (14 / 25) * 100, color: "var(--color-red-1)" },
							]}
							label={
								<p className="text-center text-2.5xl text-red-1 font-serif">
									14/25
								</p>
							}
						/>
						<p className="text-xs text-gray-1">Progress</p>
					</div>
					<div className="text-sm text-gray-1">
						<p>
							I have created a set of achievements for myself and I use this
							page to track them.
						</p>
						<p>
							If you want to give me a challenge and rate it, please feel free
							to submit it with the button below!
						</p>
					</div>

					<Link
						to="/open-for-hire"
						className=" border border-red-1 text-red-1 text-center text-lg font-serif px-2 py-1 hover:animate-pulse active:scale-95 transition"
					>
						Challenge Me
					</Link>
				</div>
				<div className="flex-1 overflow-auto flex flex-col gap-12 pb-14">
					<div className="grid gap-4">
						<h5>Achieved:</h5>
						<Achievement
							title="released personal website"
							description="The site you are exploring right now, yes, I built it! Took me a few focused days to bring it to life."
							image="/imgs/rewards/3.png"
							completed
							completion_date={new Date("2025-04-30")}
						/>
						<Achievement
							title="developed 2 Open source packages"
							description="Built two Typescript libraries for managing horizontal dates and cookies, shared openly with the community."
							image="/imgs/rewards/3.png"
							completed
							completion_date={new Date("2025-01-14")}
							color="yellow"
						/>
					</div>
					<div className="grid gap-4">
						<h5>To be Achieved:</h5>

						<Achievement
							title="gain 50 stars on any of my repository"
							description="Working toward building tools that earn recognition and support from developers worldwide."
							image="/imgs/rewards/3.png"
							completed={false}
							color="blue"
							className="opacity-50"
						/>
						<Achievement
							title="Become fluent in Dutch and German"
							description="On a journey to master Dutch and German to connect with more people and cultures."
							image="/imgs/rewards/3.png"
							completed={false}
							color="green"
							className="opacity-50"
						/>
					</div>
				</div>
				<ul className="w-max shrink-0 order-first lg:order-[unset]">
					<li>
						<label
							htmlFor="achieved"
							className="inline-flex gap-2 items-center"
						>
							<input
								defaultChecked
								type="checkbox"
								name="achieved"
								id="achieved"
								className="border border-red-1 bg-transparent w-4 h-4 rounded-none appearance-none accent-red-1 checked:bg-red-1 checked:outline-1 checked:outline-red-1 checked:outline-offset-1 peer"
							/>
							<span className="text-red-1 drop-shadow-[0_0_3px_0_#FF4646] peer-checked:font-medium">
								Achieved
							</span>
						</label>
					</li>
					<li>
						<label
							htmlFor="in_progress"
							className="inline-flex gap-2 items-center"
						>
							<input
								defaultChecked
								type="checkbox"
								name="in_progress"
								id="in_progress"
								className="border border-red-1 bg-transparent w-4 h-4 rounded-none appearance-none accent-red-1 checked:bg-red-1 checked:outline-1 checked:outline-red-1 checked:outline-offset-1 peer"
							/>
							<span className="text-red-1 drop-shadow-[0_0_3px_0_#FF4646] peer-checked:font-medium">
								In progress
							</span>
						</label>
					</li>
					<li>
						<label htmlFor="todo" className="inline-flex gap-2 items-center">
							<input
								type="checkbox"
								name="todo"
								id="todo"
								className="border border-red-1 bg-transparent w-4 h-4 rounded-none appearance-none accent-red-1 checked:bg-red-1 checked:outline-1 checked:outline-red-1 checked:outline-offset-1 peer"
							/>
							<span className="text-red-1 drop-shadow-[0_0_3px_0_#FF4646] peer-checked:font-medium">
								TODO
							</span>
						</label>
					</li>
				</ul>
			</div>
		</div>
	);
}
