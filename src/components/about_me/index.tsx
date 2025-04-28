import { Link } from "@tanstack/react-router";

import { Corners } from "../corners";
import { TitleBox } from "../title-box";

export function AboutMe() {
	return (
		<aside className="flex-[0.25] flex flex-col justify-between uppercase tracking-sm h-full">
			<div className="flex flex-col gap-4">
				<Link
					to="/about-me"
					className="border border-white/13 relative p-4 active:scale-95 transition-transform"
				>
					<img
						src="/imgs/me-alt.png"
						alt="Hemense"
						width={164}
						height={148}
						className="w-full h-auto object-cover object-top animate-pulse"
					/>
					<Corners />
				</Link>
				<div>
					<h5 className="text-sm font-sans leading-none">Name</h5>
					<p className="text-lg text-red-1 font-bold font-serif">Hemense Lan</p>
				</div>
				<div>
					<h5 className="text-sm font-sans leading-none">Occupation</h5>
					<p className="text-lg text-red-1 font-bold font-serif">
						Frontend Developer
					</p>
				</div>
				<div>
					<h5 className="text-sm font-sans leading-none">Corporation</h5>
					<a
						href="https://afex.africa"
						target="_blank"
						rel="noreferrer noopener"
						className="text-lg text-red-1 font-bold font-serif"
					>
						AFEX
					</a>
				</div>
				<Link to="/open-for-hire">
					<h5 className="text-sm font-sans leading-none">Availability</h5>
					<TitleBox title="Open for Hire" />
				</Link>
				<div>
					<h5 className="text-sm font-sans leading-none">Connect</h5>
					<Link
						to="/contact-me"
						className="text-lg text-red-1 font-bold font-serif border border-red-1 mt-1 py-1 px-2 flex items-center justify-between gap-4 overflow-clip"
					>
						<span className="shrink-0">Open connection</span>
						<svg
							width="14"
							height="21"
							viewBox="0 0 14 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Bluetooth</title>
							<path
								d="M9.341 10.03L13.684 14.373L8.028 20.029H6.028V13.343L1.664 17.707L0.249001 16.293L6.028 10.515V9.54499L0.249001 3.76499L1.664 2.35099L6.028 6.71499V0.0289917H8.028L13.684 5.68599L9.341 10.03ZM8.028 11.544V17.201L10.856 14.373L8.028 11.544ZM8.028 8.51399L10.856 5.68599L8.028 2.85799V8.51499V8.51399Z"
								fill="#E84A4A"
							/>
						</svg>
					</Link>
				</div>
			</div>
			<div>
				<h5 className="text-lg text-red-1 font-bold font-serif">Motto:</h5>

				<p className="text-sm font-sans leading-none text-balance">
					I think therefore I am. I doubt therefore I exist ~ Rene Descartes
				</p>
			</div>
		</aside>
	);
}
