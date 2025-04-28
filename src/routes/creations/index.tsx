import { CreationsCarousel } from "@/components/creations";
import { WORKS } from "@/services/data";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/creations/")({
	component: RouteComponent,
	loader: () => {
		return WORKS;
	},
});

function RouteComponent() {
	const data = useLoaderData({ from: "/creations/" });
	return (
		<div className="flex flex-col items-center px-4 py-6 gap-4 bg-gradient-red h-full">
			<h3 className="uppercase text-center">Creations</h3>

			<div className="w-full h-full">
				<CreationsCarousel data={data} />
			</div>
		</div>
	);
}
