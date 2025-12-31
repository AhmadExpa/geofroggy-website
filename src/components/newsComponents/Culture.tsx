import Image from 'next/image';

const Culture = () => {
    return (
        <section className="py-12 md:py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
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
                    <h3 className="text-3xl font-semibold text-[#8DC63F]">Culture</h3>
                </div>

                <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Culture Spotlight & Deep Dives
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


                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Left - Featured Story */}
                    <div className="bg-[#EFEFEF] rounded-2xl overflow-hidden shadow-md">
                        <div className="relative h-72 lg:h-80">
                            <Image
                                src="/images/news/n7.png"
                                alt="Lunar New Year Across Asia"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6 flex items-end justify-between gap-6">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-[#383838] mb-2">
                                    Lunar New Year Across Asia
                                </h3>
                                <p className="text-[#5E5E5E] text-sm leading-relaxed">
                                    While the Lunar New Year is celebrated in many Asian countries, the details — from food and colors to rituals and meanings ...........
                                </p>
                            </div>

                            <button className="shrink-0 px-4 py-2 bg-[#8DC63F] text-white font-medium rounded-md hover:bg-[#7AB62F] transition-colors">
                                Read Full Story
                            </button>
                        </div>

                    </div>

                    {/* Right - Two Smaller Stories */}
                    <div className="flex flex-col gap-6">
                        {/* Indigenous Language Revival */}
                        <div className="bg-[#EFEFEF] rounded-2xl overflow-hidden shadow-md flex flex-col sm:flex-row">
                            <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
                                <Image
                                    src="/images/news/n8.png"
                                    alt="The Indigenous Language Revival"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-5 flex-1">
                                <h3 className="text-xl font-bold text-[#383838] mb-2">
                                    The Indigenous Language Revival
                                </h3>
                                <p className="text-[#5E5E5E] text-sm mb-4 leading-relaxed">
                                    In classrooms, community centers, and online platforms, people are reviving languages that were once silenced. This story highlights efforts in Canada, Chile...........
                                </p>
                                <button className="shrink-0 px-4 py-2 bg-[#8DC63F] text-white font-medium rounded-md hover:bg-[#7AB62F] transition-colors">
                                    Read Full Story
                                </button>
                            </div>
                        </div>

                        {/* Diaspora Dialogues */}
                        <div className="bg-[#EFEFEF] rounded-2xl overflow-hidden shadow-md flex flex-col sm:flex-row">
                            <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
                                <Image
                                    src="/images/news/n9.png"
                                    alt="Diaspora Dialogues"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-5 flex-1">
                                <h3 className="text-xl font-bold text-[#383838] mb-2">
                                    Diaspora Dialogues
                                </h3>
                                <p className="text-[#5E5E5E] text-sm mb-4 leading-relaxed">
                                    For those living between worlds, culture isn't a location — it's a negotiation. In this piece, immigrants from Nigeria, Turkey, and El Salvador share how they express...........
                                </p>
                                <button className="shrink-0 px-4 py-2 bg-[#8DC63F] text-white font-medium rounded-md hover:bg-[#7AB62F] transition-colors">
                                    Read Full Story
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Culture;