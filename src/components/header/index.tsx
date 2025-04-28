import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

import { Link } from "@tanstack/react-router";

dayjs.extend(utc);
dayjs.extend(timezone);

export function Header() {
	const userTz = dayjs.tz.guess();
	const myTz = "Africa/Lagos";
	return (
		<header className="flex items-center justify-between py-6 font-bold uppercase text-white/20 backdrop-blur-lg">
			<div className="inline-flex gap-10">
				<div className="inline-flex items-end leading-none font-serif tracking-[7.5%] gap-1">
					<span className="text-2.5xl text-green-4">48</span> <span>Level</span>
				</div>
				<div className="inline-flex items-end leading-none font-serif tracking-[7.5%] gap-1">
					<span className="border border-white/29 w-8 h-8 grid place-content-center mr-4 text-lg text-red-1">
						+
					</span>
					<span className="text-2.5xl text-green-4">1,425</span>{" "}
					<span>Coins awarded</span>
				</div>
			</div>
			<ul className="flex items-center gap-6">
				<li>
					<a href="/Lan_Hemense_CV.pdf" className="text-white" download>
						In Print
					</a>
				</li>
				<li>
					<Link to="/credits" className="text-white">
						Credits
					</Link>
				</li>
				<li>
					Server Time:
					<span className="text-white ml-2">
						{dayjs().tz(myTz).format("HH:mm")}
					</span>
				</li>
				<li>
					Local Time:
					<span className="text-white ml-2">
						{dayjs().tz(userTz).format("HH:mm")}
					</span>
				</li>
			</ul>
		</header>
	);
}
