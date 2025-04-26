import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useRef, useState } from "react";

import { cn } from "@/lib/cn";
import { Carousel } from "@mantine/carousel";
import { Link } from "@tanstack/react-router";

import { Corners } from "../corners";

export function CreationsCarousel() {
	const autoplay = useRef(Autoplay({ delay: 3500 }));
	const [activeSlide, setActiveSlide] = useState(0);

	const slides = [0, 1, 2, 3, 4, 5];

	return (
		<Carousel
			withControls={false}
			onSlideChange={(index) => setActiveSlide(index)}
			slideSize="33.333%"
			slideGap="md"
			height="100%"
			initialSlide={1}
			align="center"
			loop
			styles={{
				root: { height: "calc(100%*4/5)" },
			}}
			plugins={[autoplay.current]}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
			nextControlIcon={<ArrowRight2 color="red" size={14} />}
			previousControlIcon={<ArrowLeft2 color="red" size={14} />}
		>
			{slides.map((slide, index) => {
				const slidePosition = getSlidePosition(
					index,
					activeSlide,
					slides.length,
				);

				return (
					<Carousel.Slide key={slide}>
						<div
							className={cn(
								"h-full flex items-center self-center w-full  perspective-normal uppercase",
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
									<h5>Published 3 months Ago</h5>
									<div className="flex-1 flex flex-col gap-2 h-full">
										<img
											src="/imgs/works/kaspa.png"
											alt="Work"
											width={500}
											height={500}
											className="w-full h-full object-cover object-left"
										/>
										<Link
											to="/creations/$slug"
											target="_blank"
											params={{ slug: "123" }}
											className="self-end shrink-0 border border-red-1 px-2 py-1.5 text-xs"
										>
											View Live
										</Link>
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
												The Project Name
											</h6>
											<p
												className={cn(slidePosition !== "center" && "text-xs")}
											>
												KASPA
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
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Iure temporibus perspiciatis modi doloribus, tenetur maiores
										nam sapiente hic vero illum.
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
