import Image from 'next/image';

export default function RealStories() {
    const stats = [
        { number: '82', label: 'countries represented', color: '#8DC63F' },
        { number: '14,500', label: 'stories shared', color: '#8DC63F' },
        { number: '500+', label: 'Cultural Tags', color: '#8DC63F' },
        { number: '12', label: 'global features', color: '#8DC63F' },
    ];

    // Profile images data with real images from Unsplash
    const profiles = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
            alt: 'Woman smiling',
            position: 'top-left'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
            alt: 'Man smiling',
            position: 'top-right'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop',
            alt: 'Woman professional',
            position: 'middle-left'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
            alt: 'Young man',
            position: 'middle-right'
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
            alt: 'Woman outdoors',
            position: 'bottom-left'
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
            alt: 'Man portrait',
            position: 'bottom-right'
        },
    ];

    return (
        <section className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Main Content Area with Profile Images */}
                <div className="relative max-w-4xl mx-auto mb-12 md:mb-16">
                    {/* Profile Images - Positioned Around Content */}
                    {/* Top Left */}
                    <div className="absolute -left-4 md:-left-12 lg:-left-20 top-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg hidden sm:block">
                        <Image
                            src={profiles[0].src}
                            alt={profiles[0].alt}
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Top Right */}
                    <div className="absolute -right-4 md:-right-12 lg:-right-20 top-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg hidden sm:block">
                        <Image
                            src={profiles[1].src}
                            alt={profiles[1].alt}
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Middle Left */}
                    <div className="absolute -left-4 md:-left-16 lg:-left-24 top-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg hidden sm:block">
                        <Image
                            src={profiles[2].src}
                            alt={profiles[2].alt}
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Middle Right */}
                    <div className="absolute -right-4 md:-right-16 lg:-right-24 top-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg hidden sm:block">
                        <Image
                            src={profiles[3].src}
                            alt={profiles[3].alt}
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Bottom Left */}
                    <div className="absolute -left-4 md:-left-12 lg:-left-20 bottom-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg hidden sm:block">
                        <Image
                            src={profiles[4].src}
                            alt={profiles[4].alt}
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Bottom Right */}
                    <div className="absolute -right-4 md:-right-12 lg:-right-20 bottom-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg hidden sm:block">
                        <Image
                            src={profiles[5].src}
                            alt={profiles[5].alt}
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Center Content */}
                    <div className="text-center px-4 md:px-8 lg:px-12 py-8 md:py-12">


                        {/* Main Heading */}
                        {/* Logo and Subtitle */}
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="relative w-6 h-6 md:w-8 md:h-8">
                                <Image
                                    src="/images/headIcon.png"
                                    alt=""
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-3xl font-semibold text-[#8DC63F]">Real Stories,Real People</h3>
                        </div>

                        <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Faces Behind The Moment
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

                        {/* Description */}
                        <p className="text-[#2C2C2C] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                            Every story on Geofroggy is rooted in lived experience — from remote villages to vibrant cities. When you support us, you're empowering real people to share their truths, preserve their cultures, and connect us all through the power of storytelling.
                        </p>
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="bg-[#F5F5F5] rounded-xl py-8 md:py-10 px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                                    style={{ color: stat.color }}
                                >
                                    {stat.number}
                                </div>
                                <div className="text-[#2C2C2C] text-sm md:text-base font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}