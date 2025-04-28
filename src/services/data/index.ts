import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import type { Work } from "./types";

dayjs.extend(relativeTime);

const format_date = (date: Date) => dayjs(date).fromNow();

// const image = "/imgs/works/default.jpg";

export const WORKS: Array<Work> = [
	{
		date_published: format_date(new Date("2024-04-10")),
		description:
			"Developed a fast, fun lottery platform where users can redeem their weekly lottery numbers, win, and repeat.",
		link: "https://scratchmelottery.com",
		sub_title: "A New Way to Play",
		title: "Scratchme Lottery",
		slug: "scratchme-lottery",
		image: "/imgs/works/scratchme.png",
	},
	{
		date_published: format_date(new Date("2025-04-22")),
		description:
			"Built a trade bot interface that automates and simplifies commodity trading on AfricaExchange.",
		link: "https://africaexchange.com",
		sub_title: "Smarter Trading for Africa",
		title: "AfricaExchange Trade Bot",
		slug: "africaexchange-trade-bot",
		image: "/imgs/works/africaexchange.png",
	},
	{
		date_published: format_date(new Date("2025-04-22")),
		description:
			"Developed a modern neo-banking platform focused on smooth transactions and user-centered design.",
		link: "https://bankx-git-development-afex.vercel.app",
		sub_title: "Banking for the Future",
		title: "BankX",
		slug: "bankx",
		image: "/imgs/works/bankx.png",
	},
	{
		date_published: format_date(new Date("2025-04-22")),
		description:
			"Crafted an e-commerce blog experience for Furbar, blending storytelling with smart shopping.",
		link: "https://furbar.vercel.app/",
		sub_title: "Furniture with Character",
		title: "Furbar Furnitures",
		slug: "furbar-furnitures",
		image: "/imgs/works/furbar.png",
	},
	{
		date_published: format_date(new Date("2025-04-22")),
		description:
			"Rebuilt the corporate presence for AFEX, showcasing its leadership in Africa’s commodities ecosystem",
		link: "https://afex.africa",
		sub_title: "Powering African Markets",
		title: "Afex.Africa",
		slug: "afex-africa",
		image: "/imgs/works/afex-africa.png",
	},
	{
		date_published: format_date(new Date()),
		description:
			"Building a SaaS tool for Katsina State to manage farmers, monitor weather, and optimize crop and livestock planning.",
		link: "http://kaspa-beryl.vercel.app/",
		sub_title: "Smarter Farming ",
		title: "KASPA",
		slug: "kaspa",
		image: "/imgs/works/kaspa.png",
	},
];
