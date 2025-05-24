import dayjs from "dayjs";
import { useState } from "react";

import { LogEntry } from "@/components/log_entry";
import { TitleBox } from "@/components/title-box";
import { LOG_ENTRIES } from "@/services/data";
import { Carousel } from "@mantine/carousel";
import { Modal } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/logs/")({
	component: RouteComponent,
	loader: () => {
		return LOG_ENTRIES;
	},
});

function RouteComponent() {
	const data = useLoaderData({ from: "/logs/" });
	const [opened, { toggle }] = useDisclosure();
	const [, scrollTop] = useWindowScroll();

	const [logs, setLogs] = useState({
		current: data.filter((el) => el.current)[0],
		others: data.filter((el) => !el.current),
	});

	const onEntryClick = (idx: number) => () => {
		const newCurrent = logs.others.splice(idx, 1, {
			...logs.current,
			current: false,
		});

		setLogs((prev) => ({
			current: { ...newCurrent[0], current: true },
			others: prev.others
				.concat({ ...prev.current, current: false })
				.filter((_, id) => id !== idx),
		}));

		scrollTop({ y: 0 });
	};

	const { current, others } = logs;

	return (
		<>
			<div className="flex flex-col items-center p-6 pb-20 gap-4 bg-gradient-red h-full uppercase tracking-sm overflow-auto">
				<h3 className="text-center">data log dump initialized.</h3>
				<div className="w-full max-w-3xl leading-none flex flex-col gap-4 items-center">
					<div className="grid gap-1.5 w-full">
						<TitleBox
							title={`Log Entry: ${current.title}`}
							className="px-1 bg-red-1 font-semibold"
							rightSection={
								<p className="text-sm font-normal font-sans">
									DATE: {dayjs(current.start_date).format("YYYY.MM.DD")}
								</p>
							}
						/>
						<p>
							<span>Location:</span>{" "}
							<span className="text-gray-1">
								{current.location}, Blue Planet
							</span>
						</p>
						<p>
							<span>Project Status:</span>{" "}
							<span className="text-gray-1">{current.status}</span>
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
						<LogEntry
							title="Project Update"
							description={current.project_update}
						/>
						<LogEntry title="Challenges" description={current.challenges} />
						<LogEntry title="Next Steps" description={current.next_steps} />
						<LogEntry title="Conclusion" description={current.conclusion} />
					</div>

					<button
						type="button"
						className="w-max border border-red-1 text-red-1 inline-flex gap-6 items-center px-3 py-1.5 uppercase font-serif cursor-pointer active:scale-95 transition-all animate-bounce font-semibold"
						onClick={toggle}
					>
						Preview Visual Records
						<img src="/icons/png.svg" alt="PNG icon" width={20} height={20} />
					</button>

					<div className="grid gap-4 w-full">
						<h6>Older Logs:</h6>
						<div className="w-full grid gap-2">
							{others
								.sort((a, b) => a.end_date.getTime() - b.end_date.getTime())
								.map((log, idx) => (
									<button
										type="button"
										key={log.title}
										onClick={onEntryClick(idx)}
										className="w-full cursor-pointer active:translate-y-0.5 active:scale-[98%] duration-200 ease-in"
									>
										<TitleBox
											key={log.title}
											title={`Log Entry: ${log.title}`}
											className="bg-transparent px-1 text-red-1 border border-red-1 font-normal"
											rightSection={
												<p className="text-sm font-normal font-sans">
													DATE:{" "}
													{log.end_date
														? dayjs(log.end_date).format("YYYY.MM.DD")
														: "In the Present"}
												</p>
											}
										/>
									</button>
								))}
						</div>
					</div>
				</div>
			</div>

			<Modal
				opened={opened}
				onClose={toggle}
				centered
				size="xl"
				withCloseButton={false}
				p={0}
				padding={0}
			>
				<Carousel
					withIndicators
					withControls={false}
					classNames={{ indicator: "bg-red-1!" }}
					loop
				>
					{current.images.map((img) => (
						<Carousel.Slide mih={320} key={img}>
							<img
								src={img}
								alt={current.title}
								height={500}
								width={500}
								className="w-full h-full object-fill object-top"
							/>
						</Carousel.Slide>
					))}
				</Carousel>
			</Modal>
		</>
	);
}
