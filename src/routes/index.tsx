import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<main className="h-svh w-dvw bg-gradient-red-dash flex items-center justify-center">
			<div className="flex items-center gap-20">
				<h1 className="font-serif leading-tight text-red-1 text-[33.625rem] font-bold tracking-[-6%]">
					HI!
				</h1>
				<div className="text-white font-sans max-w-xl text-xl grid gap-6">
					<h4 className="text-2.5xl uppercase">
						Introducing Hemense Lan, A Frontend Engineer
					</h4>
					<p>
						This website is designed to feel like a sci-fi control panel. Every
						line of text is crafted to match that theme.
					</p>
					<p>
						You'll see “quests” and “achievements” that track progress in my
						career and personal growth. Each one ties directly to what I’m
						currently building or learning.
					</p>

					<Link
						to="/bio"
						className="border border-red-1 p-2 px-10 text-2.5xl text-center font-serif w-max text-red-1 uppercase hover:bg-red-1 hover:text-white active:scale-95 transition-all"
					>
						Enter the Matrix
					</Link>
				</div>
			</div>
		</main>
	);
}
