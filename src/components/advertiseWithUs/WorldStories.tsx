import Image from 'next/image';

const WorldStories = () => {
    return (
        <section className="bg-white py-16 px-6 lg:px-20">

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
                <div className="absolute inset-0 opacity-100">
                    <Image
                        src="/images/sectionBg.png"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="space-y-6">


                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#383838] mb-4">
                        Geofroggy at the Center of World Stories
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


                    <p className="text-gray-700 leading-relaxed">
                        Geofroggy isn't just a platform — it's a cultural compass. Our brand represents the harmony of many traditions, perspectives, and identities, unified through storytelling. From Morocco to Mongolia, your brand sits at the intersection of culture and connection.
                    </p>

                    <ul className="space-y-4">
                        {[
                            'Centre of Global Culture',
                            'Visual Storytelling',
                            'Community-Driven',
                            'Mission-Led Media',
                            'Perfect for Purpose-Driven Brands'
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="relative w-4 h-4 md:w-6 md:h-6">
                                    <Image
                                        src="/images/headIcon.png"
                                        alt=""
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-[#383838]">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative flex justify-center lg:justify-end items-end">

                    <div className="relative z-10">
                        <Image
                            src="/images/worldStories.png"
                            alt="Hand holding mobile phone showing Copedia app"
                            width={400}
                            height={500}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorldStories;