import Image from 'next/image';

const OurPhilosophy = () => {
    return (
        <section className="relative py-10 md:py-16 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-100">
                <Image
                    src="/images/sectionBg.png"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>

            <div className="relative container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
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
                        <h3 className="text-3xl font-semibold text-[#8DC63F]">Our Philosophy</h3>
                    </div>

                    <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Geography as Story
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

                    <div className="max-w-3xl mx-auto space-y-3">
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            We look beyond the coordinates. To us, geography is made up of the stories that unfold in each corner of the world — from sunlit markets in Morocco to snow-covered towns in Finland.
                        </p>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            Geofroggy is a space where people don't just mark locations; they bring them to life through memories, voices, and lived experiences. This philosophy shapes everything we do — and it's what makes our global archive unlike any other.
                        </p>
                    </div>
                </div>

                {/* Circular Images */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                    <div className="relative aspect-square rounded-full overflow-hidden shadow-lg">
                        <Image
                            src="/images/about/a1.png"
                            alt="Cultural celebration with people"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative aspect-square rounded-full overflow-hidden shadow-lg">
                        <Image
                            src="/images/about/a2.png"
                            alt="Traditional dance performance"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative aspect-square rounded-full overflow-hidden shadow-lg">
                        <Image
                            src="/images/about/a3.png"
                            alt="Colorful festival celebration"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative aspect-square rounded-full overflow-hidden shadow-lg">
                        <Image
                            src="/images/about/a4.png"
                            alt="Traditional costume and culture"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurPhilosophy