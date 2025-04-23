import { RootLayout } from "@/layouts/root";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bio")({
	component: () => (
		<RootLayout>
			<Bio />
		</RootLayout>
	),
});

function Bio() {
	return <Outlet />;
}
