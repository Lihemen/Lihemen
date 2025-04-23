import { RootLayout } from "@/layouts/root";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/achievements")({
	component: () => (
		<RootLayout>
			<RouteComponent />
		</RootLayout>
	),
});

function RouteComponent() {
	return <Outlet />;
}
