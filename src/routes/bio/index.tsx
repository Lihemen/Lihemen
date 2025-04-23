import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bio/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col items-center p-4 py-6 text-center">
			<h2 className="max-w-xl uppercase">
				Navigating code and communities as a Frontend Developer, Software
				Architect, and Mentor, while staying sharp through football, swimming,
				solving puzzles, and chasing goals on and off the field.
			</h2>
		</div>
	);
}
