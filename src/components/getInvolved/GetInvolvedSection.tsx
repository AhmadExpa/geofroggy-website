import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GetInvolvedSection = () => {
    const getInvolvedData = [
        {
            id: 1,
            icon: "📖",
            title: "Share Your Story",
            description: "Your personal experience can become part of a growing global archive. Whether it's a childhood memory, a local tradition, or a powerful moment that shaped your identity — your story offers a window into your culture. Help us create a memorable and multifaceted tableau across continents.",
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=400&fit=crop",
            buttonText: "Start My Story",
            buttonColor: "bg-green-600 hover:bg-green-700"
        },
        {
            id: 2,
            icon: "🌍",
            title: "Represent Your Region",
            subtitle: "Become an Ambassador",
            description: "Regional Ambassadors act as bridges, bringing stories and voices from their communities into the global conversation. From organizing story drives to nurturing new ideals, you'll help ensure your region is seen, respected, and celebrated. It's more than a title — it's a chance to lead with pride and purpose.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop",
            buttonText: "Join the Ambassador Network",
            buttonColor: "bg-green-600 hover:bg-green-700"
        },
        {
            id: 3,
            icon: "🎨",
            title: "Contribute Your Skills",
            subtitle: "Join as a Volunteer",
            description: "Whether you're a writer, translator, designer, or developer, your skills can help preserve cultural heritage. Join our global community of volunteers working to document, translate, and share stories from around the world. Every contribution makes a difference.",
            image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=400&fit=crop",
            buttonText: "Volunteer Today",
            buttonColor: "bg-green-600 hover:bg-green-700"
        },
        {
            id: 4,
            icon: "🤝",
            title: "Partner With Us",
            subtitle: "Institutional Collaboration",
            description: "We collaborate with universities, museums, cultural organizations, and community groups to amplify voices and preserve heritage. Partner with us to create meaningful projects that celebrate diversity and foster cross-cultural understanding on a global scale.",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=400&fit=crop",
            buttonText: "Explore Partnerships",
            buttonColor: "bg-green-600 hover:bg-green-700"
        }
    ];

    return (
        <section className="py-16 px-4 mb-16 ">
            <div className="max-w-7xl mx-auto">


                {/* Get Involved Items */}
                <div className="space-y-20">
                    {getInvolvedData.map((item, index) => {
                        const isOdd = item.id % 2 !== 0;

                        return (
                            <div
                                key={item.id}
                                className={`flex flex-col ${isOdd ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    } items-center gap-8 lg:gap-12`}
                            >
                                {/* Content Side */}
                                <div className="flex-1 space-y-6">

                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="relative w-8 h-8">
                                                <Image
                                                    src="/images/headIcon.png"
                                                    alt=""
                                                    width={32}
                                                    height={32}
                                                    className="object-contain"
                                                />
                                            </div>
                                            {item.subtitle && (
                                                <h3 className="text-lg font-semibold text-[#8DC63F]">
                                                    {item.subtitle}
                                                    Top Contributors</h3>
                                            )}
                                        </div>
                                        <div>
                                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                                {item.title}
                                            </h2>
                                            <div className="flex justify-start">
                                                <Image
                                                    src="/images/heading.png"
                                                    alt="Decorative line"
                                                    width={250}
                                                    height={20}
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {item.description}
                                    </p>

                                    <Link
                                        href="/sign-up"
                                        className={`${item.buttonColor} bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white px-6 py-2 rounded-lg font-medium hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md`}
                                    >
                                        {item.buttonText}
                                    </Link>
                                </div>

                                {/* Image Side */}
                                <div className="flex-1 w-full">
                                    <div className="relative rounded-2xl overflow-hidden ">
                                        {/* Decorative background blob */}
                                        <div
                                            className={`absolute rounded-l-full  -z-10 w-full h-full ${isOdd ? '-right-8 -top-8' : '-left-8 -bottom-8'
                                                } opacity-20`}
                                        >
                                            <div className={`w-full h-full ${index === 0 ? 'bg-blue-300' :
                                                index === 1 ? 'bg-green-300' :
                                                    index === 2 ? 'bg-purple-300' :
                                                        'bg-orange-300'
                                                } rounded-full blur-3xl`}></div>
                                        </div>

                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full rounded-l-full h-80 object-cover "
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section >
    );
};

export default GetInvolvedSection;