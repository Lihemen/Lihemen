import { Corners } from "@/components/corners";
import { RootLayout } from "@/layouts/root";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about-me")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<RootLayout>
			<div className="px-4 pt-6 pb-24 uppercase bg-gradient-red h-full flex flex-col gap-6">
				<div className="relative">
					<h3 className="text-center">Who is Hemense Lan</h3>
					<div
						className="absolute -left-[7%] top-1/2 -translate-y-1/2 w-full hidden lg:flex items-center pointer-events-none"
						aria-hidden
					>
						<span className="border-l-2 border-t-2 border-[#333] -rotate-45 block w-2 h-2 translate-x-2" />
						<span className="w-[43.5%] h-0.5 block bg-[#333]" />
						<span className="bg-[#333] w-2 h-2 rounded-full" />
					</div>
				</div>

				<div className="flex justify-center lg:justify-end h-full gap-4">
					<ul className="flex flex-col gap-4">
						<li className="flex gap-4">
							<p className="text-xs text-right mt-2 text-gray-1 w-36">
								The short introduction of my life
							</p>
							<p className="max-w-xs text-sm text-balance">
								I’ve always been drawn to the endless possibilities of the
								internet and how it can improve lives. That curiosity led me to
								web engineering, where I focus on building innovative, impactful
								solutions that solve real-world problems.
							</p>
						</li>
						<li className="flex gap-4">
							<p className="text-xs text-right mt-2 text-gray-1 w-36">
								Career and Development
							</p>
							<p className="max-w-xs text-sm text-balance">
								Throughout my journey, I’ve worked with a variety of
								technologies—from frontend frameworks like React and Angular to
								backend tools like Node.js and Go. I'm always exploring new
								trends and tools, constantly learning to sharpen my skills.
							</p>
						</li>
						<li className="flex gap-4">
							<p className="text-xs text-right mt-2 text-gray-1 w-36">
								How I Collaborate
							</p>
							<p className="max-w-xs text-sm text-balance">
								As a web engineer, I focus on building reliable, scalable, and
								secure applications. I enjoy working with cross-functional teams
								and partnering with clients to deliver solutions that truly meet
								their needs.
							</p>
						</li>
					</ul>
					<div className="hidden lg:block h-full bg-black relative shrink-0">
						<img
							src="/imgs/me-full.png"
							alt="Hemense"
							width={347}
							height={694}
							className="h-full object-contain object-center"
						/>
						<Corners />
					</div>
				</div>
			</div>
		</RootLayout>
	);
}
