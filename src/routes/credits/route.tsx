import { ContactLayout } from "@/layouts/contact";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/credits")({
	component: () => (
		<ContactLayout>
			<RouteComponent />
		</ContactLayout>
	),
});

function RouteComponent() {
	return (
		<div className="uppercase grid gap-8 tracking-sm text-left">
			<div>
				<h5 className="font-serif text-lg">Credits</h5>
				<p className="text-gray-3 border-b-2 border-red-1 pb-1.5">
					Everything involved in this project
				</p>
			</div>
			<div className="flex">
				<p className="w-32">Developed By</p>
				<ul className="pl-6 text-gray-3 max-w-xs">
					<li>Hemense Lan @lihemen</li>
				</ul>
			</div>
			<div className="flex">
				<p className="w-32">Designed By</p>
				<ul className="pl-6 text-gray-3 max-w-xs">
					<li>alex dimitrov @xavortm</li>
				</ul>
			</div>
			<div className="flex">
				<p className="w-32">Visual Assets</p>
				<ul className="pl-6 text-gray-3 max-w-xs">
					<li>Images generated from Leonardo.AI</li>
					<li>Icons from Iconsax</li>
					<li>Hexagons by OpenAI</li>
				</ul>
			</div>
			<div className="flex">
				<p className="w-32">Audio Effects</p>
				<ul className="pl-6 text-gray-3 max-w-xs">
					<li>click, hover, typing and all other audio effects by mixkit.co</li>
				</ul>
			</div>
			<div className="flex">
				<p className="w-32">Music</p>
				<ul className="pl-6 text-gray-3 max-w-xs">
					<li>"Death of Peace of Mind" by Bad Omens</li>
					<li>"Stressed Out" by Twenty One Pilots</li>
					<li>"I'm just a kid" by Simple Plan</li>
				</ul>
			</div>
		</div>
	);
}
