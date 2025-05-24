import { InfoCircle } from "iconsax-react";

import { useThemeContext } from "@/context/theme";
import { Button, CheckIcon, ColorSwatch, Modal, Slider } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

export function VisualSettings() {
	const [opened, { open, close }] = useDisclosure();
	const { theme, text } = useThemeContext();

	const [colorScheme, setColorScheme] = theme;
	const [fontSize, setFontSize] = text;

	const form = useForm<{
		theme: typeof colorScheme;
		textSize: typeof fontSize;
	}>({
		initialValues: {
			textSize: fontSize.replace("px", ""),
			theme: colorScheme,
		},
	});

	const applyChanges = (values: typeof form.values) => {
		setColorScheme(values.theme);
		setFontSize(`${values.textSize}px`);
		close();
	};

	return (
		<>
			<li className="text-lg text-red-1 border border-white/13 hover:border-current *:p-1.5 *:cursor-pointer active:scale-95 transition-all *:text-left">
				<button type="button" onClick={open} className="h-full w-full">
					<span className="uppercase">Visual Settings</span>
				</button>
			</li>

			<Modal
				onClose={close}
				opened={opened}
				centered
				radius="sm"
				withCloseButton={false}
				closeOnClickOutside={false}
				styles={{
					content: {
						background: "transparent",
						textTransform: "uppercase",
						letterSpacing: "7.5%",
						backdropFilter: "blur(10px)",
					},
				}}
			>
				<h6 className="text-lg font-serif font-medium text-white">
					Visual Configurator
				</h6>
				<p className="font-sans">Apply what works best for you</p>

				<form
					className="flex flex-col gap-4"
					onSubmit={form.onSubmit(applyChanges)}
				>
					<div className="bg-red-2/30 backdrop-blur-3xl p-4 border border-white/13 mt-4 flex flex-col gap-4 text-red-1 clip-pent">
						<div className="text-lg flex flex-col pb-10 gap-4">
							<div>
								<p>Color Scheme</p>
								<div className="flex gap-4">
									<ThemeIcon
										color="#e84a4a"
										checked={form.values.theme === "default"}
										onClick={() => form.setFieldValue("theme", "default")}
									/>
									<ThemeIcon
										color="#53cc60"
										checked={form.values.theme === "green"}
										onClick={() => form.setFieldValue("theme", "green")}
									/>
									<ThemeIcon
										color="#4a90e2"
										checked={form.values.theme === "blue"}
										onClick={() => form.setFieldValue("theme", "blue")}
									/>
									<ThemeIcon
										color="#7a7a7a"
										checked={form.values.theme === "dark"}
										onClick={() => form.setFieldValue("theme", "dark")}
									/>
									<ThemeIcon
										color="#f68c42"
										checked={form.values.theme === "orange"}
										onClick={() => form.setFieldValue("theme", "orange")}
									/>
								</div>
							</div>
							<div>
								<p>Text Scale</p>
								<Slider
									min={12}
									max={18}
									label={(val) => `${val}px`}
									thumbSize={30}
									thumbChildren={<span />}
									size={32}
									mt={-10}
									radius={4}
									classNames={{
										track:
											"before:bg-black-1! before:border before:border-gray-1",
										bar: "bg-red-1!",
										thumb: "bg-red-1!",
									}}
									{...form.getInputProps("textSize")}
								/>
							</div>
						</div>

						<hr className="bg-red-1 text-red-1" />

						<div className="flex gap-4">
							<InfoCircle
								size={20}
								color="var(--color-red-1)"
								className="shrink-0"
							/>
							<p className="leading-none font-medium">
								The configuration data is stored in your browser. If you login
								from a different browser or machine, your settings will not
								apply.
							</p>
						</div>
					</div>

					<div className="flex flex-col lg:flex-row w-full gap-4">
						<Button
							type="submit"
							fullWidth
							color="var(--color-red-1)"
							classNames={{ label: "text-black!" }}
							ff="var(--font-big-shoulder)"
							radius={0}
						>
							WRITE TO DISK [ENTER]
						</Button>
						<Button
							type="submit"
							variant="outline"
							color="var(--color-red-1)"
							ff="var(--font-big-shoulder)"
							radius={0}
							onClick={close}
							fullWidth
						>
							DISCARD [ESC]
						</Button>
					</div>
				</form>
			</Modal>
		</>
	);
}

function ThemeIcon({
	checked,
	onClick,
	color,
}: { checked: boolean; onClick: () => void; color: string }) {
	return (
		<ColorSwatch
			component="button"
			type="button"
			radius="sm"
			color={color}
			onClick={onClick}
			style={{ color: "#fff", cursor: "pointer" }}
		>
			{checked && <CheckIcon size={12} />}
		</ColorSwatch>
	);
}
