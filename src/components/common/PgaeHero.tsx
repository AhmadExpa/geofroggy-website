"use client";

import Image from "next/image";

interface Props {
    title?: string;
    subTitle: string;
    Bg: string;
    gradientOverlay?: boolean; // optional prop
    tagLine?: string;
}

const PageHero = ({ title, subTitle, Bg, gradientOverlay = false, tagLine }: Props) => {
    return (
        <div className="relative w-full min-h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={Bg}
                    alt="Hero background"
                    fill
                    className="object-cover"
                />
                {/* Black overlay */}
                {!gradientOverlay && (
                    <div className="absolute inset-0 bg-black/24 z-10"></div>
                )}

                {/* Optional Gradient Overlay */}
                {gradientOverlay && (
                    <div
                        className="absolute inset-0 z-20"
                        style={{
                            background: "linear-gradient(to right, #E1F3FF 0%, #ECFFE1 100%)",
                            mixBlendMode: "overlay",
                        }}
                    ></div>
                )}
            </div>

            {/* Content */}
            <div className="relative z-30 h-full flex items-center justify-center py-8 sm:py-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative">
                    {title && (
                        <div
                            className="relative bg-[#8DC63F] px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg inline-block mb-3 sm:mb-4 overflow-hidden"
                            style={{
                                maskImage:
                                    "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                                WebkitMaskImage:
                                    "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                            }}
                        >
                            {/* Left blurred lights */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-24 h-24">
                                <div className="absolute inset-0 rounded-full bg-white/30 blur-3xl"></div>
                                <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl translate-x-6 translate-y-4"></div>
                                <div className="absolute inset-0 rounded-full bg-white/15 blur-xl -translate-x-2 translate-y-6"></div>
                            </div>

                            {/* Right blurred foliage */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-32 h-32">
                                <div className="absolute inset-0 bg-[#426F05]/50 blur-3xl rounded-full"></div>
                                <div className="absolute inset-0 bg-[#426F05]/40 blur-2xl rounded-full translate-x-4 -translate-y-4"></div>
                                <div className="absolute inset-0 bg-[#426F05]/35 blur-xl rounded-full -translate-x-2 translate-y-4"></div>
                            </div>

                            <h2 className="relative text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold z-10">
                                {title}
                            </h2>
                        </div>
                    )}


                    <h1
                        className={`${gradientOverlay ? "text-[#383838]" : "text-white"
                            } text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6`}
                    >
                        {subTitle}
                    </h1>

                    {tagLine && (
                        <h3
                            className={`${gradientOverlay ? "text-[#383838]" : "text-white"
                                } text-sm sm:text-base md:text-xl lg:text-2xl mb-3 sm:mb-4 md:mb-6`}
                        >
                            {tagLine}
                        </h3>
                    )}

                </div>
            </div>
        </div>
    );
};

export default PageHero;
