import { ContactForm } from "@/components/contact-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/open-for-hire/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="uppercase grid gap-8 tracking-sm text-left">
			<div>
				<h5 className="font-serif text-lg">Open for Hire</h5>
				<p className="text-gray-3">I would love to hear about your projects!</p>
			</div>

			<ContactForm id="HIRING YOU" />
		</div>
	);
}
