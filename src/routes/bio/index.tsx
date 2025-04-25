import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bio/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col items-center pt-6 text-center h-full overflow-clip gap-4">
			<h2 className="max-w-xl uppercase px-4">
				Navigating code and communities as a Frontend Developer, Software
				Architect, and Mentor, while staying sharp through football, swimming,
				solving puzzles, and chasing goals on and off the field.
			</h2>

			<div className="h-full bg-amber-50 w-full flex items-center justify-center">
				<img
					src="/scene.jpg"
					alt="scene"
					width={500}
					height={500}
					className="h-full w-full"
				/>
			</div>
		</div>
	);
}
