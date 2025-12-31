"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
    id: number;
    backgroundImage: string;
    backgroundImageTwo?: string;
    location?: string;
    eventName?: string;
    photographer?: string;
    hashtag?: string;
    isHero?: boolean;
}

const slides: Slide[] = [
    {
        id: 1,
        backgroundImage: "/images/bg1.jpg",
        backgroundImageTwo: "/images/bg1.1.png",
        isHero: true,
    },
    {
        id: 2,
        backgroundImage: "/images/bg2.png",
        location: "Florida, United States",
        eventName: "Holi Celebrations",
        photographer: "Michael Neck.",
        hashtag: "#TheCultureMedia",
    },
    {
        id: 3,
        backgroundImage: "/images/bg3.png",
        location: "Lahore, Pakistan",
        eventName: "Ramadan Special",
        photographer: "Chris Woaks.",
        hashtag: "#TheCultureMedia",
    },
];

const HomeHero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    const currentSlideData = slides[currentSlide];

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* Background image (behind) */}
                <Image
                    src={currentSlideData.backgroundImage}
                    alt={currentSlideData.eventName || "Hero background"}
                    fill
                    className="object-cover"
                    priority={currentSlide === 0}
                />
                {/* Front image (in front) - only for hero with backgroundImageTwo */}
                {currentSlideData.isHero && currentSlideData.backgroundImageTwo && (
                    <div className="absolute inset-0 z-[1]">
                        <Image
                            src={currentSlideData.backgroundImageTwo}
                            alt="Hero front image"
                            fill
                            className="object-cover"
                            priority={currentSlide === 0}
                        />
                    </div>
                )}
                <div className="absolute inset-0 bg-black/24 z-[2]"></div>
            </div>

            <div className="relative z-10 h-full flex items-center justify-center">
                {currentSlideData.isHero ? (
                    <div className="max-w-7xl mx-auto px-6 text-center relative">


                        <div className="relative bg-[#8DC63F] px-8 py-4 rounded-lg inline-block mb-4 overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
                            {/* Blurred light circular shapes on the left */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-24 h-24">
                                <div className="absolute inset-0 rounded-full bg-white/30 blur-3xl"></div>
                                <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl translate-x-6 translate-y-4"></div>
                                <div className="absolute inset-0 rounded-full bg-white/15 blur-xl -translate-x-2 translate-y-6"></div>
                            </div>
                            {/* Blurred dark green foliage shapes on the right */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-32 h-32">
                                <div className="absolute inset-0 bg-[#426F05]/50 blur-3xl rounded-full"></div>
                                <div className="absolute inset-0 bg-[#426F05]/40 blur-2xl rounded-full translate-x-4 -translate-y-4"></div>
                                <div className="absolute inset-0 bg-[#426F05]/35 blur-xl rounded-full -translate-x-2 translate-y-4"></div>
                            </div>
                            <h2 className="relative text-white text-2xl md:text-3xl font-bold z-10">
                                Our Window, Your World
                            </h2>
                        </div>

                        <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
                            Engage! Share! Cultivate
                        </h1>

                        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                            Welcome to Geofroggy—a unique platform where the power of geography
                            unites people from every corner of the world. Here, we believe that
                            every place has a story to tell.
                        </p>

                        <div className="flex items-center justify-center gap-6 mb-8">
                            <Link
                                href="/sign-up"
                                className="bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white px-6 py-2 rounded-lg font-medium hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md"
                            >
                                Join Now
                            </Link>
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div
                                            key={i}
                                            className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                                        >
                                            <Image
                                                src={`https://i.pravatar.cc/150?img=${i + 10}`}
                                                alt={`Profile ${i + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-[#175883] text-white rounded-full px-2 py-2 font-bold">
                                    5k+
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="absolute bottom-8 left-6 text-white flex items-center gap-6">
                            <div className="flex flex-col">
                                <div className="text-3xl font-bold">{currentSlideData.location}</div>
                                <div className="text-2xl">{currentSlideData.eventName}</div>
                            </div>
                            <div className="flex items-center gap-2 text-lg">
                                <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center text-sm font-bold">
                                    C
                                </span>
                                <span>Taken By: {currentSlideData.photographer}</span>
                            </div>
                        </div>
                        {currentSlideData.hashtag && (
                            <div className="absolute bottom-8 right-6 text-white text-xl font-semibold">
                                {currentSlideData.hashtag}
                            </div>
                        )}
                    </>
                )}
            </div>

            <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                            ? "bg-white"
                            : "bg-white/30 border border-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomeHero;

