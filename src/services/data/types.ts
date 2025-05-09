export interface Work {
	date_published: string;
	link: string;
	title: string;
	sub_title: string;
	description: string;
	slug: string;
	image?: string;
	technologies: Array<`fa-${string} fa-${string}`>;
	links: Array<{
		name: string;
		size: number;
	}>;
	bio: string;
}

export interface Log {
	title: string;
	current: boolean;
	project_update: string;
	challenges: string;
	next_steps: string;
	conclusion: string;
	start_date: Date;
	end_date: Date | null;
	location: string;
	status: "Completed" | "In Development";
}
