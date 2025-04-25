import { ContactLayout } from "@/layouts/contact";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/open-for-hire")({
	component: () => (
		<ContactLayout>
			<RouteComponent />
		</ContactLayout>
	),
});

function RouteComponent() {
	return <Outlet />;
}
