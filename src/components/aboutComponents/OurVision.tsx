import Image from 'next/image';

const OurVision = () => {
    return (
        <section className="relative py-12 md:py-16 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-100">
                <Image
                    src="/images/sectionBg.png"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>

            <div className="relative container mx-auto px-4 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="relative w-7 h-7">
                            <Image
                                src="/images/headIcon.png"
                                alt=""
                                width={28}
                                height={28}
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-base md:text-lg font-semibold text-[#8DC63F]">
                            Our Vision
                        </h3>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        A Connected World, One Story at a Time
                    </h2>

                    <div className="flex justify-center mb-6">
                        <Image
                            src="/images/heading.png"
                            alt="Decorative line"
                            width={200}
                            height={16}
                            className="object-contain"
                        />
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4 mb-8">
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            We dream of a world where borders don't divide — they inspire conversation. Where learning about another culture is just a scroll away. Our vision is a global tapestry stitched together with authentic voices from all walks of life — people sharing festivals, family meals, traditions, migrations, milestones, and everything in between.
                        </p>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            No matter where you're from, your story has a place here — and it might just change someone's view of the world.
                        </p>
                        {/* Quote mark */}
                        <div className=" ">
                            <Image
                                src="/images/coma.png"
                                alt=""
                                width={50}
                                height={50}
                                className="object-contain opacity-100"
                            />
                        </div>


                        <blockquote className="italic text-black font-bold text-sm md:text-base leading-relaxed mb-4">
                            Geofroggy helped me rediscover the stories of my hometown  and connect with people who've never even heard of it. It reminded me that every place has a voice, and every voice deserves to be heard.
                        </blockquote>

                        <p className="text-left text-[#4A90E2] text-base md:text-lg font-serif italic">
                            A Geofroggy Contributor from Kenya
                        </p>

                    </div>
                </div>

                {/* Quote Section */}
                <div className="relative">

                </div>
            </div>
        </section>
    );
};

export default OurVision;