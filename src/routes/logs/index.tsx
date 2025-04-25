import { LogEntry } from "@/components/log_entry";
import { TitleBox } from "@/components/title-box";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/logs/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col items-center p-6 gap-4 bg-gradient-red h-full uppercase tracking-sm overflow-auto">
			<h3 className="text-center">data log dump initialized.</h3>
			<div className="w-full max-w-3xl leading-none flex flex-col gap-4 items-center">
				<div className="grid gap-1.5 w-full">
					<TitleBox
						title="Log Entry: Project Development Update"
						className="px-1 bg-red-1 font-semibold"
						rightSection={
							<p className="text-sm font-normal font-sans">DATE: 2007.04.25</p>
						}
					/>
					<p>
						<span>Location:</span>{" "}
						<span className="text-gray-1">Abuja, Nigeria, Blue Planet</span>
					</p>
					<p>
						<span>Project Status:</span>{" "}
						<span className="text-gray-1">In Development</span>
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
					<LogEntry
						title="Project Update"
						description="The development team has been working tirelessly on the latest iteration of the project. Significant progress has been made in the areas of neural interface integration, machine learning algorithms, and quantum computing."
					/>
					<LogEntry
						title="Challenges"
						description="The team has encountered several challenges during the development process, including unexpected system crashes, hardware malfunctions, and unanticipated compatibility issues..."
					/>
					<LogEntry
						title="Next Steps"
						description="The development team has been working tirelessly on the latest iteration of the project. Significant progress has been made in the areas of neural interface integration, machine learning algorithms, and quantum computing."
					/>
					<LogEntry
						title="Conclusion"
						description="Despite the challenges encountered, the team remains optimistic about the potential of the project. The development of advanced neural interfaces and machine learning algorithms ..."
					/>
				</div>

				<button
					type="button"
					className="w-max border border-red-1 text-red-1 inline-flex gap-6 items-center px-3 py-1.5 uppercase font-serif cursor-pointer active:scale-95 transition-all animate-bounce font-semibold"
				>
					Preview Visual Records
					<img src="/icons/png.svg" alt="PNG icon" width={20} height={20} />
				</button>

				<div className="grid gap-1 w-full">
					<h6>Older Logs:</h6>
					<TitleBox
						title="Log Entry: Project Development Update"
						className="bg-transparent px-1 text-red-1 border border-red-1 font-normal"
						rightSection={
							<p className="text-sm font-normal font-sans">DATE: 2007.04.25</p>
						}
					/>
					<TitleBox
						title="Log Entry: Project Development Update"
						className="bg-transparent px-1 text-red-1 border border-red-1 font-normal"
						rightSection={
							<p className="text-sm font-normal font-sans">DATE: 2007.04.25</p>
						}
					/>
					<TitleBox
						title="Log Entry: Project Development Update"
						className="bg-transparent px-1 text-red-1 border border-red-1 font-normal"
						rightSection={
							<p className="text-sm font-normal font-sans">DATE: 2007.04.25</p>
						}
					/>
					<TitleBox
						title="Log Entry: Project Development Update"
						className="bg-transparent px-1 text-red-1 border border-red-1 font-normal"
						rightSection={
							<p className="text-sm font-normal font-sans">DATE: 2007.04.25</p>
						}
					/>
				</div>
			</div>
		</div>
	);
}
