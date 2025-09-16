import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import type { Log, Work } from "./types";

dayjs.extend(relativeTime);
const format_date = (date: Date) => dayjs(date).fromNow();
// const image = "/imgs/works/default.jpg";

export const WORKS: Array<Work> = [
	{
		date_published: format_date(new Date("2024-04-10")),
		description:
			"Developed a fast, fun lottery platform where users can redeem their weekly lottery numbers.",
		bio: "Led a team of 4 developers to build this platform over 6 months. Personally responsible for the secure number generation system and payment integration. The platform now handles over 10,000 daily users with 99.9% uptime.",
		link: "https://scratchmelottery.com",
		sub_title: "A New Way to Play",
		title: "Scratchme Lottery",
		slug: "scratchme-lottery",
		image: "/imgs/works/scratchme.png",
		technologies: [
			"fa-brands fa-react",
			"fa-brands fa-git",
			"fa-brands fa-js",
			"fa-brands fa-node",
			"fa-solid fa-database",
		],
		links: [
			{
				name: "GitHub Repository",
				size: 45,
			},
			{
				name: "Case Study",
				size: 32,
			},
		],
	},
	{
		date_published: format_date(new Date("2025-04-22")),
		description:
			"Built a trade bot interface that automates and simplifies commodity trading on AfricaExchange.",
		bio: "Designed and implemented the algorithmic trading engine that powers this platform. Worked closely with commodities experts to develop trading strategies that have consistently outperformed manual trading by 12% annually.",
		link: "https://africaexchange.com",
		sub_title: "Smarter Trading for Africa",
		title: "AfricaExchange Trade Bot",
		slug: "africaexchange-trade-bot",
		image: "/imgs/works/africaexchange.png",
		technologies: [
			"fa-brands fa-react",
			"fa-brands fa-git",
			"fa-brands fa-js",
			"fa-brands fa-python",
			"fa-solid fa-chart-line",
		],
		links: [
			{
				name: "Live Demo",
				size: 38,
			},
			{
				name: "Documentation",
				size: 42,
			},
		],
	},
	{
		date_published: format_date(new Date("2025-04-22")),
		description:
			"Developed a modern neo-banking platform focused on smooth transactions and user-centered design.",
		bio: "Led frontend development for this fintech startup. Implemented a component library that reduced development time by 40% and ensured consistent UX across all platform features. The app achieved a 4.8/5 rating on app stores.",
		link: "https://bankx-git-development-afex.vercel.app",
		sub_title: "Banking for the Future",
		title: "BankX",
		slug: "bankx",
		image: "/imgs/works/bankx.png",
		technologies: [
			"fa-brands fa-react",
			"fa-brands fa-git",
			"fa-brands fa-js",
			"fa-brands fa-sass",
			"fa-solid fa-mobile-screen",
		],
		links: [
			{
				name: "App Store",
				size: 36,
			},
			{
				name: "Play Store",
				size: 36,
			},
		],
	},
	{
		date_published: format_date(new Date("2025-04-22")),
		description:
			"Crafted an e-commerce blog experience for Furbar, blending storytelling with smart shopping.",
		bio: "Designed and implemented this unique blend of content marketing and e-commerce from concept to launch. The platform increased average order value by 27% compared to the client's previous traditional e-commerce site.",
		link: "https://furbar.vercel.app/",
		sub_title: "Furniture with Character",
		title: "Furbar Furnitures",
		slug: "furbar-furnitures",
		image: "/imgs/works/furbar.png",
		technologies: [
			"fa-brands fa-react",
			"fa-brands fa-git",
			"fa-brands fa-js",
			"fa-brands fa-wordpress",
			"fa-solid fa-cart-shopping",
		],
		links: [
			{
				name: "Featured Collection",
				size: 52,
			},
			{
				name: "Design Process",
				size: 44,
			},
		],
	},
	{
		date_published: format_date(new Date("2025-04-22")),
		description:
			"Rebuilt the corporate presence for AFEX, showcasing its leadership in Africa's commodities ecosystem.",
		bio: "Spearheaded the complete redesign of AFEX's digital presence, working directly with C-suite executives to align the website with the company's strategic vision. The new site increased investor inquiries by 65% and improved user session duration by 3 minutes on average.",
		link: "https://afex.africa",
		sub_title: "Powering African Markets",
		title: "Afex.Africa",
		slug: "afex-africa",
		image: "/imgs/works/afex-africa.png",
		technologies: [
			"fa-brands fa-react",
			"fa-brands fa-git",
			"fa-brands fa-js",
			"fa-brands fa-node",
			"fa-solid fa-globe",
		],
		links: [
			{
				name: "Impact Report",
				size: 42,
			},
			{
				name: "Media Coverage",
				size: 44,
			},
		],
	},
	{
		date_published: format_date(new Date()),
		description:
			"Building a SaaS tool for Katsina State to manage farmers, monitor weather, and optimize crop and livestock planning.",
		bio: "Currently serving as technical lead on this government agricultural initiative. Working with agronomists and climate scientists to translate complex agricultural models into actionable insights for over 50,000 farmers across the state.",
		link: "http://kaspa-beryl.vercel.app/",
		sub_title: "Smarter Farming for a Sustainable Future",
		title: "KASPA",
		slug: "kaspa",
		image: "/imgs/works/kaspa.png",
		technologies: [
			"fa-brands fa-react",
			"fa-brands fa-git",
			"fa-brands fa-js",
			"fa-brands fa-python",
			"fa-solid fa-cloud-sun",
		],
		links: [
			{
				name: "Pilot Program Results",
				size: 55,
			},
			{
				name: "Farmer Dashboard",
				size: 48,
			},
		],
	},
];

export const LOG_ENTRIES: Array<Log> = [
	{
		challenges:
			"Balancing feature delivery with long-term scalability, navigating legacy code transitions, and aligning UI/UX improvements with evolving business priorities",
		conclusion:
			"This role deepened my expertise in building scalable frontend systems, strengthened my ability to collaborate across product and engineering teams, and reinforced the importance of clean architecture in rapidly growing products.",
		current: true,
		location: "Abuja, Nigeria",
		next_steps:
			"Taking a short break to contribute to open source, refocus on the energy sector, and align with impactful work.",
		project_update:
			"Led frontend development on several large-scale platforms including a neo-bank, ERP, and digital wallet systems, delivering responsive, accessible interfaces and improving performance across key user workflows.",
		start_date: new Date("2022-09-18"),
		end_date: new Date("2025-07-24"),
		status: "In Development",
		title: "Frontend Developer | AFEX ",
		images: [],
	},
	{
		challenges:
			"Building scalable components under tight timelines, managing async collaboration across time zones, and adapting to fast-changing product directions in a high-velocity startup environment.",
		conclusion:
			"This role refined my ability to work autonomously, contribute meaningfully in distributed teams, and build production-ready features in rapidly evolving codebases.",
		current: false,
		location: "San Francisco, US",
		next_steps:
			"Shifting focus to more impact-driven projects, open source collaboration, and deepening my expertise in energy-tech and user-focused systems.",
		project_update:
			"Contributed to Jyve Partner Platform (JPP) and Central, shipping core features like job template creation, AI-driven job validation, and performance dashboards to enhance workforce efficiency and internal tooling.",
		start_date: new Date("2024-05-22"),
		end_date: new Date("2025-04-30"),
		status: "Completed",
		title: "Frontend Developer | Jyve ",
		images: [],
	},
	{
		challenges:
			"Mastering complex AWS services integration, understanding best practices for scalable cloud architecture, and preparing for rigorous certification exams under a tight schedule.",
		conclusion:
			"Achieving the AWS Certified Developer Associate strengthened my cloud development skills, enhanced my understanding of AWS ecosystem, and prepared me to design efficient, reliable cloud solutions.",
		current: false,
		location: "San Francisco, US",
		project_update:
			"Completed comprehensive training and hands-on labs covering AWS core services, deployment, and troubleshooting to validate my cloud development expertise. Writing the Exam in July.",
		next_steps:
			"Pursuing the AWS Solutions Architect certification to deepen my skills in designing scalable and resilient cloud architectures.",
		start_date: new Date("2025-01-11"),
		end_date: new Date("2025-07-31"),
		status: "Completed",
		title: "AWS Certified Developer Associate",
		images: [],
	},
	{
		challenges:
			"Collaborating effectively across cross-functional teams, balancing diverse perspectives from product, design, and engineering, and managing rapid iteration cycles within tight deadlines.",
		conclusion:
			"Co.Lab strengthened my skills in end-to-end product development, from customer research and ideation through design and engineering, while working alongside mentors from top tech companies.",
		current: false,
		location: "Remote",
		project_update:
			"Participated in an 8-week immersive program simulating a real tech company environment, collaborating with product managers, UX/UI designers, and engineers to build user-centered products through the full software development lifecycle.",
		next_steps:
			"Applying cross-functional collaboration skills to impactful projects and continuing mentorship in product-driven engineering.",
		status: "Completed",
		start_date: new Date("2024-08-18"),
		end_date: new Date("2023-10-18"),
		title: "Software Developer Immersive | Co.Lab.io",
		images: [
			"/imgs/logs/colab/1.png",
			"/imgs/logs/colab/2.png",
			"/imgs/logs/colab/3.png",
			"/imgs/logs/colab/4.png",
			"/imgs/logs/colab/5.png",
		],
	},
	{
		challenges:
			"Integrating multiple government APIs for real-time land record validation, ensuring data accuracy and security, and building a user-friendly interface for property listings and service requests.",
		conclusion:
			"The project sharpened my skills in API integration, secure data handling, and delivering an MVP that bridges government systems with end-user needs in real estate.",
		current: false,
		location: "Abuja, Nigeria",
		project_update:
			"Developed an MVP platform connecting users with the Land Records Bureau and Ministry of Lands to validate property records, list properties, and request surveys and documentation.",
		next_steps:
			"Enhancing platform features and expanding integrations to streamline property services further.",
		status: "Completed",
		start_date: new Date("2024-12-17"),
		end_date: new Date("2025-03-10"),
		title: "Slas Prop | Search for a property",
		images: [],
	},
	{
		challenges:
			"Implementing secure user authentication alongside seamless guest checkout, ensuring smooth session resumption, and integrating marketing tools for newsletters and ad campaigns.",
		conclusion:
			"This project enhanced my skills in full-stack e-commerce workflows, balancing user experience with security and marketing needs in a small business context.",
		current: false,
		location: "Abuja, Nigeria",
		project_update:
			"Delivered a complete rebrand and web platform enabling authenticated and guest purchases, session persistence, and integrated newsletter and advertising management.",
		next_steps:
			"Exploring further client projects with a focus on scalable e-commerce solutions and marketing integrations.",
		status: "Completed",
		start_date: new Date("2022-10-24"),
		end_date: new Date("2023-02-12"),
		title: "Zashaura Perfume Store Rebrand",
		images: [],
	},
];
