import { Link, type LinkProps } from "@tanstack/react-router";
import { TitleBox } from "../title-box";

export function Navigation() {
	return (
		<nav className="absolute top-[calc(100%-28px)] left-0 right-0 flex items-center justify-center ">
			<ul className="grid grid-cols-4 gap-4 ">
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
		</nav>
	);
}

function NavLink({
	title,
	description,
	...props
}: LinkProps & { title: string; description: string }) {
	return (
		<Link
			{...props}
			className="relative before:h-full before:w-0.5 before:block before:bg-gray-2 before:translate-y-1 before:left-0 flex cursor-pointer active:scale-95 transition-all duration-300"
			activeProps={{ className: "before:bg-red-1 *:first:*:first:bg-red-1" }}
		>
			<div className="w-full h-full">
				<TitleBox
					title={title}
					className="bg-gray-2/70 text-white transition-colors"
				/>
				<p className="px-3 pt-2 opacity-50 text-xs max-w-32 uppercase text-balance">
					{description}
				</p>
			</div>
		</Link>
	);
}
