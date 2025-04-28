import { cn } from "@/lib/cn";

const colors = {
	yellow: {
		background:
			"linear-gradient(270deg, rgba(232, 187, 74, 0.14) 2.77%, rgba(232, 187, 74, 0) 50%)",
		border: "1px solid #7DFF687D",
		textcolor: "#E8BB4A",
		status: "Legendary",
	},
	red: {
		background:
			"linear-gradient(270deg, rgba(232, 74, 102, 0.18) 2.77%, rgba(232, 74, 102, 0) 50%)",
		border: "1px solid #FFFFFF21",
		textcolor: "#E84A4A",
		status: "Epic",
	},

	blue: {
		background:
			"linear-gradient(270deg, rgba(232, 187, 74, 0.14) 2.77%, rgba(232, 187, 74, 0) 50%)",
		border: "1px solid #FFFFFF21",
		textcolor: "#429DD1",
		status: "Rare",
	},
	green: {
		background:
			"linear-gradient(270deg, rgba(232, 187, 74, 0.14) 2.77%, rgba(232, 187, 74, 0) 50%)",
		border: "1px solid #7DFF687D",
		textcolor: "#5DE26A",
		status: "Uncommon",
	},
};

interface AchievementBase {
	image: string;
	title: string;
	description: string;
	color?: keyof typeof colors;
	className?: string;
}

interface CompletedAchievement extends AchievementBase {
	completed: true;
	completion_date: Date;
}

interface OngoingAchievement extends AchievementBase {
	completed: false;
}

type AchievementProps = CompletedAchievement | OngoingAchievement;

export function Achievement({
	description,
	completed,
	image,
	title,
	color = "red",
	className,
	...props
}: AchievementProps) {
	const { background, border, textcolor, status } = colors[color];
	const done = "completion_date" in props;
	return (
		<div style={{ background, border }} className={cn("p-0", className)}>
			<div className="flex">
				<div className="border-r border-r-[#1D1D20] p-4 w-32 shrink-0">
					<img
						src={image}
						alt={title}
						width={88}
						height={78}
						className="w-full h-auto"
					/>
				</div>
				<div className="p-4">
					<h5
						className="text-lg font-semibold font-serif"
						style={{ color: textcolor }}
					>
						{title}
					</h5>
					<p className="text-sm text-gray-1 tracking-normal">{description}</p>
				</div>
			</div>
			<div className="w-full flex">
				<span
					style={{ backgroundColor: textcolor }}
					className="w-32 text-center shrink-0 text-black"
				>
					{status}
				</span>
				<p
					className="flex w-full px-4 items-center text-xs tracking-sm"
					style={{ backgroundColor: `${textcolor}1A` }}
				>
					{done ? (
						<>
							Completed On: {props.completion_date.toLocaleDateString("en-UK")}
						</>
					) : (
						"Ongoing"
					)}
				</p>
			</div>
		</div>
	);
}
