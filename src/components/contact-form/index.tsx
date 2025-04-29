import axios from "axios";
import { object, string } from "zod";

import { Button, TextInput, Textarea } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";

const client = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export function ContactForm({ id }: { id: string }) {
	const form = useForm({
		initialValues: {
			referrer: id,
			name: "",
			message: "",
			email: "",
		},
		validate: zodResolver(
			object({
				name: string().min(1, "Please enter your name"),
				message: string().min(1, "Please enter your message"),
				email: string().email("Please enter a valid email address"),
			}),
		),
		validateInputOnBlur: true,
	});

	const { mutate, isPending } = useMutation({
		mutationFn: (
			values: Record<"referrer" | "name" | "message" | "email", string>,
		) => client.post("/contact", JSON.stringify(values)),
		mutationKey: ["contactForm", id],
	});

	const onSubmit = (
		values: Record<"referrer" | "name" | "message" | "email", string>,
	) =>
		mutate(values, {
			onSuccess: () => form.reset(),
			onError: (e) => {
				console.log(e);
			},
		});

	return (
		<form className="grid gap-4" onSubmit={form.onSubmit(onSubmit)}>
			<div className="bg-red-1/9 p-6 uppercase grid gap-6 shadow-sm clip-pent">
				<TextInput
					label="How should I call you"
					placeholder="Your name"
					{...form.getInputProps("name")}
					styles={{
						label: {
							fontSize: 18,
							color: "var(--color-red-1)",
							fontFamily: "var(--font-big-shoulder)",
						},
						input: {
							textTransform: "uppercase",
							fontFamily: "var(--font-iceland)",
							background: "#010103",
						},
					}}
					classNames={{ input: "focus:border-red-1!" }}
				/>
				<TextInput
					label="Sending From"
					placeholder="Your.name@email.com"
					{...form.getInputProps("email")}
					styles={{
						label: {
							fontSize: 18,
							color: "var(--color-red-1)",
							fontFamily: "var(--font-big-shoulder)",
						},
						input: {
							textTransform: "uppercase",
							fontFamily: "var(--font-iceland)",
							background: "#010103",
						},
					}}
					classNames={{ input: "focus:border-red-1!" }}
				/>
				<Textarea
					label="Transmitted Data"
					placeholder="Hi, I write about"
					{...form.getInputProps("message")}
					rows={6}
					styles={{
						label: {
							fontSize: 18,
							color: "var(--color-red-1)",
							fontFamily: "var(--font-big-shoulder)",
						},
						input: {
							textTransform: "uppercase",
							fontFamily: "var(--font-iceland)",
							background: "#010103",
						},
					}}
					classNames={{ input: "focus:border-red-1!" }}
				/>
			</div>
			<div className="flex *:flex-1 font-serif gap-4">
				<Button
					type="submit"
					disabled={isPending}
					color="var(--color-red-1)"
					classNames={{ label: "text-black!" }}
					ff="var(--font-big-shoulder)"
				>
					SEND MESSAGE [ENTER]
				</Button>
				<Button
					type="submit"
					variant="outline"
					color="var(--color-red-1)"
					ff="var(--font-big-shoulder)"
					onClick={form.reset}
				>
					DISCARD [ESC]
				</Button>
			</div>
		</form>
	);
}
