interface LogEntryProps {
	title: string;
	description: string;
	listItems?: Array<string>;
}

export function LogEntry(props: LogEntryProps) {
	return (
		<div className="bg-black p-4 clip-pent space-y-1">
			<h5 className="text-lg font-bold tracking-sm text-red-1 font-serif">
				{props.title}
			</h5>
			<p className="tracking-normal text-gray-1 font-sans line-clamp-4">
				{props.description}
			</p>
		</div>
	);
}
