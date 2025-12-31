'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WhatsAhead() {
    const roadmapItems = [
        {
            icon: '🌍',
            title: 'Platform Expansion',
            description: 'SEO optimization and content rollouts across all 190+ country pages for better discoverability and educational value.',
            position: 'left' // Changed from 'right' to 'left'
        },
        {
            icon: '📢',
            title: 'Community Activation',
            description: 'Launch of global social media campaigns focused on cultural moments and voices that deserve amplification.',
            position: 'right' // Changed from 'left' to 'right'
        },
        {
            icon: '🤝',
            title: 'Contributor Partnerships',
            description: 'Outreach to teachers, cultural ambassadors, and local experts to bring more authentic stories to life.',
            position: 'left' // Changed from 'right' to 'left'
        },
        {
            icon: '🎮',
            title: 'Interactive Features',
            description: 'Development of timelines, games, and map-based tools that encourage exploration and return engagement.',
            position: 'right' // Changed from 'left' to 'right'
        }
    ];

    return (
        <section className="relative bg-gray-50 py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
            {/* Background Pattern - Optional */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-4 sm:left-10 text-4xl sm:text-6xl">🗺️</div>
                <div className="absolute top-32 right-4 sm:right-20 text-3xl sm:text-5xl">🎭</div>
                <div className="absolute bottom-20 left-8 sm:left-32 text-3xl sm:text-4xl">🎨</div>
                <div className="absolute bottom-40 right-4 sm:right-16 text-4xl sm:text-6xl">🏛️</div>
                <div className="absolute top-1/2 left-4 sm:left-1/4 text-3xl sm:text-5xl">🎪</div>
                <div className="absolute top-1/3 right-4 sm:right-1/3 text-3xl sm:text-4xl">🎵</div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Heading */}
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#383838] mb-4">
                        What's Ahead
                    </h2>
                    <div className="flex justify-center mb-4 sm:mb-6">
                        <div className="w-32 sm:w-48 h-1 bg-[#8DC63F] rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
                        We're at the beginning of something exciting. Here's where we're headed in the next 6–12 months:
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative mt-8 sm:mt-12 md:mt-16">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-[#8DC63F] hidden md:block"></div>

                    {/* Timeline Items */}
                    <div className="space-y-8 sm:space-y-12 md:space-y-24">
                        {roadmapItems.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 ${item.position === 'right' ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Card */}
                                <div className={`w-full md:w-5/12 ${item.position === 'right' ? 'md:text-left' : ''}`}>
                                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all border-l-4 border-[#8DC63F]">
                                        <div className={`flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 ${item.position === 'right' ? 'md:justify-start' : ''}`}>
                                            <span className="text-3xl sm:text-4xl">{item.icon}</span>
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#383838]">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Dot and Arrow (Desktop only) */}
                                <div className="hidden md:flex w-2/12 justify-center items-center relative">
                                    {/* Dot */}
                                    <div className="w-4 h-4 bg-[#8DC63F] rounded-full border-4 border-white shadow-md z-10"></div>

                                    {/* Dotted Arrow - pointing towards the card */}
                                    <div className={`absolute ${item.position === 'left' ? 'right-1/2' : 'left-1/2'}`}>
                                        <svg
                                            width="120"
                                            height="40"
                                            viewBox="0 0 120 40"
                                            className={item.position === 'left' ? 'scale-x-[-1]' : ''}
                                        >
                                            <defs>
                                                <marker
                                                    id={`arrowhead-${index}`}
                                                    markerWidth="10"
                                                    markerHeight="10"
                                                    refX="9"
                                                    refY="3"
                                                    orient="auto"
                                                >
                                                    <polygon
                                                        points="0 0, 10 3, 0 6"
                                                        fill="#4A5568"
                                                    />
                                                </marker>
                                            </defs>
                                            <line
                                                x1="10"
                                                y1="20"
                                                x2="110"
                                                y2="20"
                                                stroke="#4A5568"
                                                strokeWidth="2"
                                                strokeDasharray="5,5"
                                                markerEnd={`url(#arrowhead-${index})`}
                                            />
                                        </svg>
                                    </div>
                                </div>

                                {/* Spacer for alignment */}
                                <div className="hidden md:block w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-8 sm:mt-12">
                    <Link
                        href="/about"
                        className="inline-block bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white px-5 sm:px-6 py-2 rounded-lg font-medium hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md text-sm sm:text-base"
                    >
                        See More About Us
                    </Link>
                </div>
            </div>
        </section>
    );
}