import { ContactForm } from "@/components/contact-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact-me/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="uppercase grid gap-8 tracking-sm text-left">
			<div>
				<h5 className="font-serif text-lg">connect with me</h5>
				<p className="text-gray-3">wanna chat? Or just share something cool?</p>
			</div>

			<ContactForm id="CONNECTING WITH YOU" />
		</div>
	);
}
