import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useRef, useState } from "react";

import { cn } from "@/lib/cn";
import { WORKS } from "@/services/data";
import { Carousel } from "@mantine/carousel";

import { Corners } from "../corners";

export function CreationsCarousel() {
	const autoplay = useRef(Autoplay({ delay: 3500 }));
	const [activeSlide, setActiveSlide] = useState(0);

	return (
		<Carousel
			onSlideChange={(index) => setActiveSlide(index)}
			slideSize="33.333%"
			slideGap="xl"
			height="100%"
			initialSlide={1}
			align="center"
			loop
			styles={{
				root: { height: "calc(100%*4/5)" },
				control: {
					background: "transparent",
					color: "gray",
					border: "none",
					padding: 0,
				},
			}}
			previousControlIcon={
				<ArrowLeft2 size={48} color="#FFFFFF" className="opacity-40" />
			}
			nextControlIcon={
				<ArrowRight2 size={48} color="#FFFFFF" className="opacity-40" />
			}
			controlsOffset="28%"
			plugins={[autoplay.current]}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
		>
			{WORKS.map((slide, index) => {
				const slidePosition = getSlidePosition(
					index,
					activeSlide,
					WORKS.length,
				);

				return (
					<Carousel.Slide key={slide.title}>
						<div
							className={cn(
								"h-full flex items-center self-center w-full  perspective-normal uppercase relative",
								index !== activeSlide && "h-4/6",
							)}
						>
							<div
								className={cn(
									"h-full w-full relative flex flex-col gap-4",
									slidePosition === "left"
										? "-rotate-y-[45deg] mt-[30%] opacity-30"
										: slidePosition === "right"
											? "rotate-y-[45deg] mt-[30%] opacity-30"
											: "",
								)}
							>
								<div className="bg-black h-4/5 relative flex flex-col p-4 gap-8">
									<h5>Published {slide.date_published}</h5>
									<div className="flex-1 flex flex-col gap-2 h-full">
										<img
											src={slide.image}
											alt="Work"
											width={500}
											height={500}
											className="w-full h-full object-cover object-left"
										/>
										<a
											target="_blank"
											rel="noreferrer noopener"
											href={slide.link}
											className="self-end shrink-0 border border-red-1 px-2 py-1.5 text-xs"
										>
											View Live
										</a>
									</div>

									<Corners />
								</div>

								<div className="grid gap-2">
									<div className="flex items-center gap-1">
										<div className="leading-none shrink-0">
											<h6
												className={cn(
													"text-xl text-red-1 font-serif font-semibold",
													slidePosition !== "center" && "text-xs",
												)}
											>
												{slide.title}
											</h6>
											<p
												className={cn(slidePosition !== "center" && "text-xs")}
											>
												{slide.sub_title}
											</p>
										</div>
										<div className="border-dashed border border-red-1 w-full" />
									</div>
									<p
										className={cn(
											"text-sm text-gray-1 border-b-4 border-b-red-1 rounded-b-xl pb-6 invisible line-clamp-4",
											slidePosition === "center" && "visible",
										)}
									>
										{slide.description}
									</p>
								</div>
							</div>
						</div>
					</Carousel.Slide>
				);
			})}
		</Carousel>
	);
}

function getSlidePosition(
	slideIndex: number,
	activeSlide: number,
	totalSlides: number,
) {
	if (slideIndex === activeSlide) return "center";

	// Handle looping wrap-around
	const nextSlide = (activeSlide + 1) % totalSlides;
	const prevSlide = (activeSlide - 1 + totalSlides) % totalSlides;

	if (slideIndex === prevSlide) return "left";
	if (slideIndex === nextSlide) return "right";

	return "out-of-view";
}
