import Image from 'next/image';

const OurMission = () => {
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Content */}
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
                            <h3 className="text-2xl font-semibold text-[#8DC63F]">Our Mission</h3>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Why We Exist
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


                        <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                            <p>
                                <span className="font-semibold">Geofroggy</span> was created to bridge the distance between cultures by empowering people to tell their stories. Our goal is to cultivate empathy, curiosity, and shared humanity - one voice at a time. Through the lens of storytelling, we foster respect for diversity, challenge cultural stereotypes, and amplify the perspectives that make the world richer and more connected.
                            </p>
                            <p>
                                This isn't just a platform — it's a global movement for cultural literacy and human connection.
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/mission.png"
                                alt="Diverse team holding flags representing different countries"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurMission