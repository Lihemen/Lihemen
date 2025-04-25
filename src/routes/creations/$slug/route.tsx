import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/creations/$slug")({
	component: RouteComponent,
});

function RouteComponent() {
	const slug = useParams({
		from: "/creations/$slug",
		select: (params) => params.slug,
	});

	return <div>Hello "/creations/{slug}"!</div>;
}
