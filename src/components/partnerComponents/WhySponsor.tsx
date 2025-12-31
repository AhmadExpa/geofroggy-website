import Image from "next/image";

interface OfferCard {
    id: number;
    icon: string;
    title: string;
    description: string;
}

const offerCards: OfferCard[] = [
    {
        id: 1,
        icon: "/images/pertner/icon1.png",
        title: "Support Our Mission",
        description: "Your support helps us continue to create a more connected and understanding world.",
    },
    {
        id: 2,
        icon: "/images/pertner/icon2.png",
        title: "Help Us Reach More People",
        description: "Your support helps us reach more people with our message of connectedness and understanding.",
    },
    {
        id: 3,
        icon: "/images/pertner/icon3.png",
        title: "Make a Lasting Impact",
        description: "Your support helps us create a more connected and understanding world for generations to come.",
    },
];

const WhySponsor = () => {
    return (
        <section className="py-16 px-6 bg-white relative overflow-hidden">
            {/* Decorative geometric patterns on the left */}
            <div className="absolute top-8 left-8 opacity-10">
                <svg width="200" height="200" viewBox="0 0 200 200">
                    <path
                        d="M100,20 L120,60 L160,60 L130,90 L140,130 L100,110 L60,130 L70,90 L40,60 L80,60 Z"
                        fill="none"
                        stroke="#8DC63F"
                        strokeWidth="2"
                    />
                </svg>
            </div>
            <div className="absolute top-32 left-16 opacity-10">
                <svg width="150" height="150" viewBox="0 0 150 150">
                    <path
                        d="M75,15 L90,45 L120,45 L97.5,67.5 L105,97.5 L75,82.5 L45,97.5 L52.5,67.5 L30,45 L60,45 Z"
                        fill="none"
                        stroke="#8DC63F"
                        strokeWidth="2"
                    />
                </svg>
            </div>
            <div className="absolute top-48 left-4 opacity-10">
                <svg width="120" height="120" viewBox="0 0 120 120">
                    <path
                        d="M60,12 L72,36 L96,36 L78,54 L84,78 L60,66 L36,78 L42,54 L24,36 L48,36 Z"
                        fill="none"
                        stroke="#8DC63F"
                        strokeWidth="2"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why Sponsor Us
                    </h2>
                    <div className="flex justify-center mb-6">
                        <Image
                            src="/images/heading.png"
                            alt="Decorative line"
                            width={250}
                            height={20}
                            className="object-contain"
                        />
                    </div>
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                        Your support helps us continue to create a more connected and understanding world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offerCards.map((card) => (
                        <div
                            key={card.id}
                            className="relative p-8 bg-white  transition-shadow"
                        >
                            {/* Border image overlay */}
                            <div className="absolute inset-0 pointer-events-none">
                                <Image
                                    src="/images/boxBorder.png"
                                    alt=""
                                    fill
                                    className="object-fill"
                                />
                            </div>

                            <div className="flex flex-col items-center text-center relative z-10">
                                <div className="w-20 h-20 rounded-full bg-[#8DC63F]/20 flex items-center justify-center mb-6">
                                    <div className="relative w-12 h-12">
                                        <Image
                                            src={card.icon}
                                            alt={card.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhySponsor;