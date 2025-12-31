'use client';

import Image from 'next/image';

export default function SponsorshipOpportunities() {
    const opportunities = [
        {
            src: '/images/pertner/p1.png',
            title: 'Platform Sponsorship',
            description: 'Support site development, UX improvement, and educational tools.',
            bgColor: 'bg-blue-50',
            iconBg: 'bg-blue-100'
        },
        {
            src: '/images/pertner/p2.png',
            title: 'Regional Sponsorship',
            description: 'Sponsor content from a country, region, or language group.',
            bgColor: 'bg-green-50',
            iconBg: 'bg-green-100'
        },
        {
            src: '/images/pertner/p3.png',
            title: 'Event Sponsorship',
            description: 'Partner on scavenger hunts, virtual classes, or themed campaigns.',
            bgColor: 'bg-pink-50',
            iconBg: 'bg-pink-100'
        },
        {
            src: '/images/pertner/p4.png',
            title: 'Custom Projects',
            description: 'Co-create branded modules, video content, or region-specific storytelling.',
            bgColor: 'bg-purple-50',
            iconBg: 'bg-purple-100'
        }
    ];

    return (
        <section className="bg-white py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Flexible Sponsorship Opportunities
                    </h2>
                    <div className="flex justify-center mb-6">
                        <Image
                            src="/images/heading.png"
                            alt="Decorative line"
                            width={250}
                            height={20}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {opportunities.map((opportunity, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-2 text-center transition-transform hover:scale-105 hover:shadow-lg`}
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className={`${opportunity.iconBg} w-32 h-32 rounded-2xl flex items-center justify-center`}>
                                    <Image
                                        src={opportunity.src}
                                        alt={opportunity.title}
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-bold text-[#383838] mb-4">
                                {opportunity.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {opportunity.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}