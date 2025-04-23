import { Link } from "@tanstack/react-router";

export function Header() {
	return (
		<header className="flex items-center justify-between py-6 font-bold uppercase text-white/20 backdrop-blur-lg">
			<div className="inline-flex gap-10">
				<div className="inline-flex items-end leading-none font-serif tracking-[7.5%] gap-1">
					<span className="text-2.5xl text-green-4">48</span> <span>Level</span>
				</div>
				<div className="inline-flex items-end leading-none font-serif tracking-[7.5%] gap-1">
					<span className="border border-white/29 w-8 h-8 grid place-content-center mr-4 text-lg text-red-1">
						+
					</span>
					<span className="text-2.5xl text-green-4">1,425</span>{" "}
					<span>Coins awarded</span>
				</div>
			</div>
			<ul className="flex items-center gap-6">
				<li>
					<Link to="/creations" className="text-white">
						Credits
					</Link>
				</li>
				<li>
					Server Time:
					<span className="text-white ml-2">8:42</span>
				</li>
				<li>
					Local Time:
					<span className="text-white ml-2">8:42</span>
				</li>
			</ul>
		</header>
	);
}
