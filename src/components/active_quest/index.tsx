import { TitleBox } from "../title-box";

export function ActiveQuest() {
	return (
		<aside className="flex-[0.32] flex flex-col justify-between uppercase tracking-sm h-full">
			<div className="flex w-full relative before:h-full before:w-0.5 before:block before:bg-red-1 before:translate-y-1 before:left-0 cursor-pointer active:scale-95 transition-all duration-300">
				<div className="w-full">
					<TitleBox title="Active Quest" className="text-white opacity-100" />
					<p className="bg-red-1/10 uppercase p-2 text-gray-1">
						Solo Levelling
					</p>

					<div className="px-2 py-4 grid gap-6 w-full">
						<div>
							<h5 className="text-sm font-sans leading-none">Quest Name</h5>
							<p className="text-lg text-red-1 font-bold font-serif">KASPA</p>
						</div>
						<div>
							<h5 className="text-sm font-sans leading-none">Goal</h5>
							<p className="text-gray-1 text-balance">
								Designing a SAAS tool to track farmer activity, monitor weather,
								and guide crop and livestock planning. Making it smart, simple,
								and effective.
							</p>
						</div>
						<div className="space-y-2">
							<h5 className="text-sm font-sans leading-none">Rewards</h5>
							<div className="flex flex-nowrap overflow-auto gap-2 text-gray-1 text-sm">
								<div className="grid place-items-center">
									<img
										src="/imgs/7.png"
										alt="Phoenix"
										width={40}
										height={40}
										className="rounded-lg w-10 h-10"
									/>
									<span>+5</span>
								</div>
								<div className="grid place-items-center">
									<img
										src="/imgs/4.png"
										alt="Phoenix"
										width={40}
										height={40}
										className="rounded-lg w-10 h-10"
									/>
									<span>+25</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ul className="flex flex-col gap-1 *:flex *:items-center *:justify-between text-lg text-red-1 *:border *:border-transparent *:last:border-white/13 *:last:p-1.5 *:hover:border *:hover:border-current *:p-1.5 *:cursor-pointer *:active:scale-95 *:transition-all">
				<li>Sound Effects</li>
				<li className="opacity-50">Music</li>
				<li>Visual Settings</li>
			</ul>
		</aside>
	);
}
