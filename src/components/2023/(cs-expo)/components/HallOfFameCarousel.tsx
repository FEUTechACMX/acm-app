"use client";

import React, { useEffect } from "react";
import {
    AiOutlineLeft,
    AiOutlineRight,
    AiOutlineDown,
    AiOutlineUp,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

interface Slide {
    backgroundColor: string;
    ranking: string;
    group: string;
    thesis: string;
    link: string;
}

interface CarouselProps {
    title: string;
    slides: Slide[];
    perView?: number;
    id: string;
    carouselNumber: number;
    carouselUp: string;
    carouselDown: string;
    carouselUpTarget: string;
    carouselDownTarget: string;
}

const Carousel: React.FC<CarouselProps> = ({
    title,
    slides,
    perView,
    id,
    carouselNumber,
    carouselUp,
    carouselDown,
    carouselUpTarget,
    carouselDownTarget,
}) => {
    useEffect(() => {
        // Navigation
        const carouselUp = document.getElementById(`carousel-up-${id}`);
        const carouselDown = document.getElementById(`carousel-down-${id}`);
        const targetDivUp = document.getElementById(carouselUpTarget);
        const targetDivDown = document.getElementById(carouselDownTarget);

        carouselUp.addEventListener("click", () => {
            console.log("up clicked");
            if (targetDivUp) {
                const targetPosition = targetDivUp.offsetTop;
                const headerHeight = 200; // Adjust this value as needed. The more the value, the less the scroll will be.
                const scrollPosition = targetPosition - headerHeight;

                window.scrollTo({
                    top: scrollPosition,
                    behavior: "smooth",
                });
            }
        });

        carouselDown.addEventListener("click", () => {
            console.log("down clicked");
            if (targetDivDown) {
                const targetPosition = targetDivDown.offsetTop;
                const headerHeight = 200; // Adjust this value as needed. The more the value, the less the scroll will be.
                const scrollPosition = targetPosition - headerHeight;

                window.scrollTo({
                    top: scrollPosition,
                    behavior: "smooth",
                });
            }
        });

        // Carousel
        const config = {
            type: "slider",
            startAt: 0,
            perView: 2,
            peek: {
                before: 0,
                after: 100,
            },
        };

        const glide = new Glide(`#${id}`, config);

        glide.on(["mount.after", "run"], () => {
            const currentIndex = glide.index;

            // Remove border from all slides
            const slideElements = document.querySelectorAll(
                `#slide-image-${id}`
            );
            slideElements.forEach((slide, index) => {
                slide.classList.remove(
                    "shadow-2xl",
                    "shadow-[var(--coral-pink)]",
                    "border-4",
                    "border-[var(--coral-pink)]"
                );

                if (index === currentIndex) {
                    // Add border to the current slide
                    slide.classList.add(
                        "shadow-2xl",
                        "shadow-[var(--coral-pink)]",
                        "border-4",
                        "border-[var(--coral-pink)]"
                    );
                }
            });
        });

        glide.mount();
    }, []);

    return (
        <div className="w-full max-w-[1300px] grid grid-cols-12 mt-16">
            <div className="relative col-span-12 lg:col-span-3 h-20 lg:h-3/4 flex flex-col">
                <div className="grid grid-cols-12 lg:grid-cols-2 h-full">
                    <div className="col-span-1 hidden lg:flex flex-col items-center justify-end">
                        <AiOutlineUp
                            id={`carousel-up-${id}`}
                            className={`text-5xl text-[var(--coral-pink)] cursor-pointer m-2 ${carouselUp}`}
                        />
                        <h1 className="font-bold text-3xl">{carouselNumber}</h1>
                        <AiOutlineDown
                            id={`carousel-down-${id}`}
                            className={`text-5xl text-[var(--coral-pink)] cursor-pointer m-2 ${carouselDown}`}
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-1 grid grid-cols-3 lg:grid-cols-3 md:ms-16">
                        <div className="col-span-2 flex flex-col md:pe-6">
                            <div className="flex justify-start">
                                <h1 className="hall-of-fame-header font-bold text-2xl md:text-2xl h-36 md:text-right ms-12 md:ms-0 me-4 md:me-0">
                                    {title}
                                </h1>
                            </div>
                            <div className="flex-grow relative">
                                <Image
                                    src={"/halftone.png"}
                                    className="mt-4 ms-2"
                                    layout="fill"
                                    objectFit="cover"
                                    alt="halftone"
                                ></Image>
                            </div>
                        </div>

                        <div className="col-span-1 flex flex-col md:ms-4">
                            <div className="flex justify-left">
                                <h1 className="hall-of-fame-header font-bold md:text-xl flex items-center">
                                    EXPO&nbsp;
                                    <span className="text-[var(--coral-pink)]">
                                        2023
                                    </span>
                                    &nbsp;
                                    <span className="font-bold text-xs md:text-sm">
                                        2.0
                                    </span>
                                </h1>
                            </div>
                            <div className="flex-grow mt-4 ms-3 hidden lg:block">
                                <div className="w-0.5 h-full bg-black"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="relative carousel-${id} glide overflow-hidden col-span-12 lg:col-span-9"
                id={id}
            >
                <div className="mx-10 md:mx-20 overflow-x-hidden">
                    <div className="w-[650px] sm:w-[1000px]">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                {slides.map((slide) => (
                                    <li className="glide__slide flex flex-col items-center justify-center">
                                        <div
                                            id={`slide-image-${id}`}
                                            className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]"
                                            style={{
                                                backgroundColor:
                                                    slide.backgroundColor ||
                                                    "var(--timberwolf)",
                                            }}
                                        ></div>
                                        <div className="mt-4 p-4 sm:p-0">
                                            <div className="font-bold text-lg">
                                                {slide.ranking}
                                            </div>
                                            <div className="font-bold text-3xl">
                                                {slide.group}
                                            </div>
                                            <p>{slide.thesis}</p>

                                            <div className="flex justify-end">
                                                <Link
                                                    href={slide.link || "/"}
                                                    className="font-medium hover:underline flex items-center"
                                                    style={{
                                                        color: "var(--coral-pink)",
                                                    }}
                                                >
                                                    Learn more{" "}
                                                    <span className="ms-2 text-sm">
                                                        <AiOutlineRight />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div
                        data-glide-el="controls"
                        className="hidden lg:block"
                        style={{ color: "var(--coral-pink)" }}
                    >
                        <button
                            data-glide-dir="<"
                            className="absolute top-24 md:top-36 left-3 sm:left-3.5 text-4xl sm:text-5xl font-bold"
                        >
                            <span className="flex-auto">
                                <AiOutlineLeft />
                            </span>
                        </button>
                        <button
                            data-glide-dir=">"
                            className="absolute top-24 md:top-36 right-0 text-4xl sm:text-5xl font-bold"
                        >
                            <span className="flex-auto">
                                <AiOutlineRight />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
