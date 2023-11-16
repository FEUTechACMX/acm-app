"use client";

import React, { useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Slide {
    backgroundColor: string;
}

interface CarouselProps {
    title: string;
    description: string;
    slides: Slide[];
    perView?: number;
    id: string;
}

const Carousel: React.FC<CarouselProps> = ({
    title,
    description,
    slides,
    perView,
    id,
}) => {
    useEffect(() => {
        const config = {
            type: "carousel",
            startAt: 0,
            perView: perView || 3,
            autoplay: 2000,
        };
        new Glide(`#${id}`, config).mount();
    }, []);

    return (
        <div className="grid grid-cols-12 mt-8 me-12 h-[200px]">
            <div className="col-span-12 md:col-span-3">
                <h1 className="font-bold text-5xl">{title}</h1>
                <p className="font-medium pe-12">{description}</p>
            </div>
            <div className="col-span-9 relative">
                <div className={`${id} glide`} id={id}>
                    <div className="mx-16 overflow-x-hidden">
                        <div className="w-[2000px]">
                            <div className="glide__track" data-glide-el="track">
                                <ul className="glide__slides">
                                    {slides.map((slide) => (
                                        <li className="glide__slide">
                                            <div
                                                className="w-[320px] h-[180px]"
                                                style={{
                                                    backgroundColor:
                                                        slide.backgroundColor ||
                                                        "var(--timberwolf)",
                                                }}
                                            ></div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        data-glide-el="controls"
                        style={{ color: "var(--coral-pink)" }}
                    >
                        <button
                            data-glide-dir="<"
                            className="absolute top-10 left-0 mt-4 text-5xl font-bold"
                        >
                            <span className="flex-auto">
                                <AiOutlineLeft />
                            </span>
                        </button>
                        <button
                            data-glide-dir=">"
                            className="absolute top-10 right-0 mt-4 text-5xl font-bold"
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
