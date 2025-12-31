import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BrandAsset {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const MediaAbout: React.FC = () => {
    const brandAssets: BrandAsset[] = [
        {
            title: 'Logos',
            description: '(full color, dark/white, .PNG + .SVG)',
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="30" r="12" fill="#0E7490" stroke="#0E7490" strokeWidth="1.5" />
                    <path d="M24 10C24 10 28 14 28 18C28 20 26.5 22 24 22C21.5 22 20 20 20 18C20 14 24 10 24 10Z" fill="#86EFAC" />
                    <ellipse cx="22" cy="16" rx="1" ry="1.5" fill="#0E7490" />
                    <path d="M18 28L20 32L22 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M26 28L28 32L30 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="24" cy="30" r="9" stroke="white" strokeWidth="1" fill="none" />
                    <path d="M24 24V28M16 30H32M19 34L29 34" stroke="white" strokeWidth="1" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: 'Color Palette',
            description: '(Primary HEX + RGB values)',
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="20" cy="24" r="14" fill="#86EFAC" />
                    <circle cx="28" cy="24" r="14" fill="#0E7490" />
                </svg>
            )
        },
        {
            title: 'Typography',
            description: '(Web + print fonts)',
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M8 8H12V12M8 8V12M8 8L12 12" stroke="#0E7490" strokeWidth="2" strokeLinecap="round" />
                    <path d="M36 8H40V12M40 8V12M40 8L36 12" stroke="#0E7490" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 36H12V40M8 40V36M8 40L12 36" stroke="#0E7490" strokeWidth="2" strokeLinecap="round" />
                    <path d="M36 36H40V40M40 40V36M40 40L36 36" stroke="#0E7490" strokeWidth="2" strokeLinecap="round" />
                    <text x="24" y="30" textAnchor="middle" fill="#0E7490" fontSize="20" fontWeight="bold" fontFamily="serif">T</text>
                </svg>
            )
        },
        {
            title: 'Logo Usage Guidelines',
            description: "(Do's and Don'ts)",
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M8 8H12V12M8 8V12M8 8L12 12" stroke="#0E7490" strokeWidth="2" strokeLinecap="round" />
                    <path d="M36 8H40V12M40 8V12M40 8L12 12" stroke="#0E7490" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 36H12V40M8 40V36M8 40L12 36" stroke="#0E7490" strokeWidth="2" strokeLinecap="round" />
                    <path d="M36 36H40V40M40 40V36M40 40L36 36" stroke="#0E7490" strokeWidth="2" strokeLinecap="round" />
                    <rect x="14" y="14" width="20" height="24" rx="1" fill="white" stroke="#0E7490" strokeWidth="1.5" />
                    <line x1="18" y1="20" x2="30" y2="20" stroke="#0E7490" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="18" y1="24" x2="30" y2="24" stroke="#0E7490" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="18" y1="28" x2="26" y2="28" stroke="#0E7490" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            )
        }
    ];


    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            {/* About Geofroggy Section */}
            <div className="text-center mb-16">
                <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-4">
                    About GeoFroggy
                </h2>

                <div className="flex justify-center mb-4 md:mb-6">
                    <Image
                        src="/images/heading.png"
                        alt="Decorative line"
                        width={200}
                        height={16}
                        className="object-contain"
                    />
                </div>
                <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Geofroggy is a global storytelling platform that brings geography to life through cultural experiences, personal stories, and human
                    connection. We empower contributors from around the world to share insights that transcend borders, spark empathy, and celebrate the
                    beauty of our shared humanity. From everyday voices to extraordinary journeys, Geofroggy is where culture becomes connection — one
                    story at a time.
                </p>
            </div>

            {/* Brand Assets Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
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
                        <h3 className="text-3xl font-semibold text-[#8DC63F]">Brand Assets</h3>
                    </div>

                    <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Official Brand Assets
                    </h2>

                    <div className="flex justify-start mb-4 md:mb-6">
                        <Image
                            src="/images/heading.png"
                            alt="Decorative line"
                            width={200}
                            height={16}
                            className="object-contain"
                        />
                    </div>

                    <p className="text-gray-600 mb-8">
                        Use our approved brand assets to accurately represent Geofroggy in media, press, or collaboration.
                    </p>

                    {/* Brand Assets Grid */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        {brandAssets.map((asset, index) => (
                            <div key={index} className="  p-3 shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-4">
                                    {asset.icon}
                                </div>
                                <h4 className="font-semibold text-[#383838] text-base mb-1">{asset.title}</h4>
                                <h4 className="font-semibold text-[#383838] text-base mb-1">{asset.description}</h4>
                            </div>
                        ))}
                    </div>

                    {/* Download Button */}
                    <Link
                        href="/sign-up"
                        className="inline-block bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white px-6 py-2 rounded-lg font-medium hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Right Column - Mockup */}
                <div className="relative">
                    {/* 100+ Contributors Badge */}
                    <div className="absolute -top-1 -right-2 z-10 w-32 h-32 rounded-full flex flex-col items-center justify-center text-white shadow-lg">
                        <img
                            src="/images/green.png"
                            alt="Geofroggy Platform"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Tablet Image */}
                    <img
                        src="/images/laptop.png"
                        alt="Geofroggy Platform"
                        className="w-full h-auto"
                    />


                </div>
            </div>
        </div>
    );
};

export default MediaAbout;