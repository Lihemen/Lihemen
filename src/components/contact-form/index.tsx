import { useForm } from "react-hook-form";

export function ContactForm({ id }: { id: string }) {
	const form = useForm({
		defaultValues: {
			identifier: id,
			name: "",
			message: "",
			email: "",
		},
	});

	return (
		<form className="grid gap-4" onSubmit={form.handleSubmit(() => {})}>
			<div className="bg-red-1/9 p-6 uppercase grid gap-6 shadow-sm clip-pent">
				<label htmlFor="name" className="grid gap-1">
					<span className="text-red-1 font-serif text-lg">
						How should I call you?
					</span>
					<input
						type="text"
						className="outline-none bg-[#010103] border border-[#333] px-4 py-2 text-gray-1 placeholder:uppercase uppercase text-sm tracking-sm"
						placeholder="Your name"
						id="name"
						name="name"
					/>
				</label>
				<label htmlFor="email" className="grid gap-1">
					<span className="text-red-1 font-serif text-lg">Sending From</span>
					<input
						type="email"
						className="outline-none bg-[#010103] border border-[#333] px-4 py-2 text-gray-1 placeholder:uppercase uppercase text-sm tracking-sm"
						placeholder="Your.name@example.com"
						id="email"
						name="email"
					/>
				</label>
				<label htmlFor="message" className="grid gap-1">
					<span className="text-red-1 font-serif text-lg">
						Transmitted data
					</span>
					<textarea
						rows={8}
						className="outline-none bg-[#010103] border border-[#333] px-4 py-2 text-gray-1 placeholder:uppercase uppercase text-sm tracking-sm resize-none"
						placeholder="Hi, I write to you about..."
						id="message"
						name="message"
					/>
				</label>
			</div>
			<div className="flex *:flex-1 font-serif gap-4">
				<button
					type="submit"
					className="p-1 uppercase bg-red-1 text-black cursor-pointer active:scale-95 transition-all font-medium"
				>
					Send Message [Enter]
				</button>
				<button
					type="button"
					onClick={(event) => {
						event.currentTarget.form?.reset();
					}}
					className="p-1 uppercase border border-[#262626] text-red-1 cursor-pointer active:scale-95 transition-all font-medium"
				>
					Discard [Esc]
				</button>
			</div>
		</form>
	);
}
