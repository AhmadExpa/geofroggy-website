import Image from 'next/image';

const WhatCopedia = () => {
    return (
        <section className="bg-white py-16 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
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
                        <h3 className="text-2xl font-semibold text-[#8DC63F]">What Is Copedia?</h3>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#383838] mb-4">
                        What You'll Discover
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
                        Copedia is Geofroggy's weekly cultural snapshot delivered straight to your inbox. Each
                        edition explores a unique cultural insight—from traditions and festivals to language quirks
                        and local legends. It's your 5-minute passport to the world, designed to spark curiosity,
                        celebrate diversity, and keep you globally connected wherever you are.
                    </p>

                    <ul className="space-y-4">
                        {[
                            'Fun cultural trivia',
                            'Global traditions explained',
                            'Reader-submitted facts or moments',
                            'Curated photos, holidays, or rituals',
                            'Links to full stories when available'
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
                                <span className="text-gray-800">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative flex justify-center lg:justify-end items-end">
                    <div className="absolute flex items-end justify-center lg:justify-end w-full h-full">
                        <Image
                            src="/images/greenRec.png"
                            alt="Hand holding mobile phone showing Copedia app"
                            width={400}
                            height={500}
                            className="object-contain"
                        />
                    </div>
                    <div className="relative z-10">
                        <Image
                            src="/images/hand.png"
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

export default WhatCopedia;