import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function VisualSettings() {
	const [opened, { toggle }] = useDisclosure();
	return (
		<>
			<li className="text-lg text-red-1 border border-white/13 hover:border-current *:p-1.5 *:cursor-pointer active:scale-95 transition-all *:text-left">
				<button type="button" onClick={toggle} className="h-full w-full">
					<span className="uppercase">Visual Settings</span>
				</button>
			</li>

			<Modal onClose={toggle} opened={opened} centered radius="sm">
				Visual settings
			</Modal>
		</>
	);
}
