import Image from 'next/image';

const Ambassador = () => {
    const stats = [
        {
            icon: '🌐',
            number: '58+',
            title: 'Countries Represented',
            description: 'Our ambassador network spans continents — from remote villages to urban hubs.'
        },
        {
            icon: '✍️',
            number: '1,200+',
            title: 'Stories Shared',
            description: 'Real voices and rich narratives that reflect life from the ground up.'
        },
        {
            icon: '👨‍🎓',
            number: '240+',
            title: 'Youth Ambassadors',
            description: 'Empowering the next generation to preserve and share their cultural identity.'
        },
        {
            icon: '🗺️',
            number: '12',
            title: 'New Regions Added in 2025',
            description: 'Growing our global footprint to amplify underrepresented communities.'
        }
    ];

    return (
        <section className="py-8 md:py-12 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-10">
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
                        <h3 className="text-3xl font-semibold text-[#8DC63F]">Abdassador Highlights</h3>
                    </div>

                    <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Global Voices In Action
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
                </div>


                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left - Text Content */}
                    <div className="flex flex-col justify-center">
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                            Geofroggy Ambassadors are the heart of our global platform — cultural connectors who bring local stories to the world. From organizing story circles to mentoring youth contributors, these passionate individuals help build a more connected, compassionate planet.
                        </p>

                        {/* Stats */}
                        <div className="space-y-4">
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="text-xl">{stat.icon}</span>
                                        <h4 className="text-base font-bold text-gray-900">
                                            {stat.number} {stat.title}
                                        </h4>
                                    </div>
                                    <p className="text-gray-600 text-xs md:text-sm ml-9 leading-relaxed">
                                        {stat.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative h-80 lg:h-96 w-full">
                            <Image
                                src="/images/ambasador.png"
                                alt="Geofroggy Ambassadors holding world map"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ambassador;