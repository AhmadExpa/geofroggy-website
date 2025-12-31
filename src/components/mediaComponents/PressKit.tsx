import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PressKitItem {
    icon: React.ReactNode;
    text: string;
}

const PressKit: React.FC = () => {
    const icon = (
        <Image
            src="/images/headIcon.png"
            alt=""
            width={24}
            height={24}
            className="object-contain"
        />
    );

    const pressKitItems: PressKitItem[] = [
        { icon, text: "Company Overview PDF" },
        { icon, text: "Founding Story + Mission" },
        { icon, text: "Fast Facts & Stats (reach, users, stories)" },
        { icon, text: "Notable Press Mentions" },
    ];


    return (
        <section className="relative py-8 md:py-12 overflow-hidden bg-white px-4 sm:px-6">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-100">
                <Image
                    src="/images/sectionBg.png"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-8 lg:gap-12 items-center">

                    {/* Left Column - Press Kit Mockup */}
                    <div className="relative flex items-end justify-center lg:justify-start pl-0 lg:pl-12">
                        {/* Main Book */}
                        <div className="relative z-10">
                            <img
                                src="/images/book.png"
                                alt="Geofroggy Press Kit"
                                className="w-full max-w-[280px] sm:max-w-[320px] lg:w-80 h-auto"
                            />
                        </div>

                        {/* Small Book (front, overlapping, tilted) */}
                        <div className="absolute bottom-0 left-8 sm:left-16 lg:left-68 z-20">
                            <img
                                src="/images/smallBook.png"
                                alt="Geofroggy Press Kit Small"
                                className="w-24 sm:w-28 lg:w-32 h-auto transform rotate-0 scale-105"
                            />
                        </div>
                    </div>


                    {/* Right Column - Content */}
                    <div>
                        <div className="flex items-center justify-start gap-2 mb-3">
                            <div className="relative w-6 h-6 md:w-8 md:h-8">
                                <Image
                                    src="/images/headIcon.png"
                                    alt=""
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#8DC63F]">Press Kit</h3>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            PressKit & Over View
                        </h2>

                        <div className="flex justify-start mb-4 md:mb-6">
                            <Image
                                src="/images/heading.png"
                                alt="Decorative line"
                                width={200}
                                height={16}
                                className="object-contain w-full max-w-[180px] sm:max-w-[200px]"
                            />
                        </div>


                        {/* Description */}
                        <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                            Download our official press materials to include Geofroggy in articles, features, or event coverage.
                        </p>

                        {/* Press Kit Items List */}
                        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            {pressKitItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-2 sm:gap-3">
                                    <div className="flex-shrink-0 mt-0.5">
                                        {item.icon}
                                    </div>
                                    <span className="text-gray-700 text-sm sm:text-base">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Media Contact */}
                        <div className="mb-4 sm:mb-6">
                            <span className="text-gray-700 text-sm sm:text-base">📧 </span>
                            <span className="text-gray-700 text-sm sm:text-base">Media Contact: </span>
                            <span className="text-[#8DC63F] font-medium text-sm sm:text-base">
                                media@geofroggy.com
                            </span>
                        </div>


                        <Link
                            href="/sign-up"
                            className="inline-block bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white px-5 sm:px-6 py-2 rounded-lg font-medium hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md text-sm sm:text-base"
                        >
                            Download Full Press Kit
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default PressKit;