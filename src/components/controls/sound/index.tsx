import { Checkbox } from "@mantine/core";

export function SoundEffects() {
	return (
		<li>
			<Checkbox
				label="Sound Effects"
				labelPosition="left"
				color="var(--color-red-1)"
				classNames={{
					body: "w-full justify-between items-center border border-white/13 hover:border-red-1 p-1.5 cursor-pointer",
					label: "text-lg text-red-1! uppercase",
				}}
			/>
		</li>
	);
}
