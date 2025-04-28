import { Bio } from "@/components/bio";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bio/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Bio />;
}
