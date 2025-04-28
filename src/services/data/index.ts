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

export const LOG_ENTRIES: Array<Log> = [];
