import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/creations/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col items-center px-4 py-6 gap-4 bg-gradient-red h-full">
			<h3 className="uppercase text-center">Creations.</h3>
		</div>
	);
}
