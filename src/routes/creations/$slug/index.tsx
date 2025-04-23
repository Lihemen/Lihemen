import { RootLayout } from "@/layouts/root";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/creations/$slug/")({
	component: () => (
		<RootLayout>
			<RouteComponent />
		</RootLayout>
	),
});

function RouteComponent() {
	return <div>Hello "/creations/$slug/"!</div>;
}
