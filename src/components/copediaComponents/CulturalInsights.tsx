import Image from 'next/image';
import Link from 'next/link';

const CulturalInsights = () => {
    const insights = [
        {
            image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&h=300&fit=crop',
            emoji: '🍜',
            text: 'In Japan, slurping noodles is a sign of appreciation for the chef!'
        },
        {
            image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop',
            emoji: '🏖️',
            text: 'In Tonga, nearly all shops and work close on Sunday for spiritual rest'
        },
        {
            image: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=400&h=300&fit=crop',
            emoji: '🤝',
            text: '"Ubuntu" in South Africa means "I am because we are" — a philosophy of shared humanity.'
        }
    ];

    return (
        <>
            <section className="relative py-20 px-6">


                <div className="absolute inset-0 opacity-100">
                    <Image
                        src="/images/sectionBg.png"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto">
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
                        <h3 className="text-2xl font-semibold text-[#8DC63F]">Cultural Insights</h3>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#383838] mb-4 text-center">
                        A Taste of Copedia
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

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
                        {insights.map((insight, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="relative h-48">
                                    <Image
                                        src={insight.image}
                                        alt=""
                                        fill
                                        className="object-cover p-2 rounded-2xl"
                                    />
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700 leading-relaxed">
                                        <span className="text-2xl mr-2">{insight.emoji}</span>
                                        {insight.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <div className="text-center space-y-6 my-16">
                <h3 className="text-3xl lg:text-4xl font-bold text-[#383838]">
                    Ready to Explore the World, One Fact at a Time?
                </h3>
                <p className="text-[#383838] text-lg max-w-4xl mx-auto">
                    Join thousands already exploring global traditions, values, and discoveries with Copedia.<br />
                    Small stories, big impact.
                </p>
                <Link
                    href="/sign-up"
                    className="inline-block bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white px-6 py-2 rounded-lg font-medium hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md"
                >
                    Join Now
                </Link>
            </div>
        </>
    );
}

export default CulturalInsights;