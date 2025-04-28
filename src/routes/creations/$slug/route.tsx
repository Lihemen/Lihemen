import type { ReactNode } from "react";

import { Corners } from "@/components/corners";
import { TitleBox } from "@/components/title-box";
import { WORKS } from "@/services/data";
import { Link, createFileRoute, useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/creations/$slug")({
	component: RouteComponent,
	loader(ctx) {
		const { slug } = ctx.params;

		const work = WORKS.find((el) => el.slug === slug);

		if (!work) return "Not my Creation!";

		return work;
	},
});

function RouteComponent() {
	const data = useLoaderData({ from: "/creations/$slug" });

	if (typeof data === "string") return <p className="p-2">{data}</p>;

	return (
		<div className="flex flex-col items-center px-4 py-6 gap-4 bg-gradient-red h-full uppercase overflow-clip">
			<h3 className="uppercase text-center">Creations</h3>
			<div className="flex gap-4 h-full w-full max-w-3xl justfy-center">
				<div className="w-72 shrink-0 flex flex-col gap-3">
					<div className="border border-white/13 p-2">
						<div className="border-b border-b-white/13 pb-2 leading-snug tracking-sm">
							<TitleBox
								title="Details"
								className="text-white text-sm font-normal "
							/>
							<p className="text-sm font-normal font-sans mt-2">Project Name</p>
							<p className="font-serif text-red-1 font-bold">{data.title}</p>
						</div>
						<div className="border-b border-b-white/13 pb-2 leading-snug tracking-sm">
							<p className="text-sm font-normal font-sans mt-2">Brief</p>
							<p className="font-serif text-red-1 font-bold">
								{data.description}
							</p>
						</div>
					</div>
					<div className="border border-white/13 p-2 space-y-4">
						<TitleBox
							title="Technologies"
							className="text-white text-sm font-normal "
						/>

						<div className="flex flex-wrap gap-2 text-red-1">
							{data.technologies.map((tech) => (
								<Skill key={tech}>
									<i className={tech} />
								</Skill>
							))}
						</div>
					</div>

					<div>
						<h6>About:</h6>
						<p className="text-gray-1 line-clamp-7 text-sm">{data.bio}</p>
					</div>
				</div>
				<div className="flex-1 flex flex-col gap-4">
					<div className="w-full relative border border-white/13">
						<div className="bg-red-1/20 flex items-center justify-between p-2 text-sm">
							<h6>File Explorer</h6>
						</div>
						<div className="bg-black text-gray-1 text-sm">
							<div className="border-y border-white/13 p-2">
								Location: /creations/{data.slug}
							</div>
							<ul className="grid grid-rows-6 grid-flow-col-dense p-2 gap-2">
								{data.links.map((link) => (
									<li
										className="inline-flex gap-2 items-center"
										key={link.name}
									>
										<span className="bg-red-1/30 p-2 w-12 h-12 grid place-items-center">
											<img
												src="/icons/png.svg"
												alt="PNG icon"
												width={20}
												height={20}
											/>
										</span>
										<div className="grid gap-1 leading-none">
											<span>{link.name}</span>
											<span>{link.size}KB</span>
										</div>
									</li>
								))}
							</ul>
						</div>
						<Corners />
					</div>

					<div className="flex items-center justify-between font-serif">
						<a
							href={data.link}
							target="_blank"
							rel="noreferrer noopener"
							className="bg-red-1 px-2 py-1 text-black font-semibold active:scale-95 transition-all"
						>
							View Project Demo
						</a>
						<Link
							to="/creations"
							className="border border-red-1 text-red-1 px-2 py-1 font-semibold active:scale-95 transition-all"
						>
							Back to All Projects
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

function Skill({ children }: { children: ReactNode }) {
	return (
		<div className="relative">
			{/* SVG hexagon with red stroke, rotated 90 degrees */}
			<svg width="174" height="200" viewBox="0 0 174 200" className="w-14 h-14">
				<title>Red Bordeer</title>
				<polygon
					points="87,0 174,50 174,150 87,200 0,150 0,50"
					stroke="#E84A4A"
					strokeWidth="4"
					fill="black"
				/>
			</svg>

			{/* Optional: Content inside the hexagon */}
			<div className="absolute inset-0 flex items-center justify-center text-sm">
				<span>{children}</span>
			</div>
		</div>
	);
}
