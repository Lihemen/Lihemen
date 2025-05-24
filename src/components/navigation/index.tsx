import { NavLink } from "./navlink";

export function Navigation() {
	return (
		<nav className="absolute top-[calc(100%-28px)] left-0 right-0 hidden lg:flex items-center justify-center ">
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
