import Image from "next/image";

interface WorkCard {
    id: number;
    image: string;
    text: string;
}

const workCards: WorkCard[] = [
    {
        id: 1,
        image: "/images/a1.png",
        text: "Cultural organizations"
    },
    {
        id: 2,
        image: "/images/a2.png",
        text: "Ethical travel & tourism brands"
    },
    {
        id: 3,
        image: "/images/a3.png",
        text: "Education platforms & edtech startups"
    },
    {
        id: 4,
        image: "/images/a4.png",
        text: "Foundations & NGOs"
    },
];

const BuildSomething = () => {
    return (
        <section className="py-16 px-6 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="relative w-4 h-4 md:w-6 md:h-6">
                            <Image
                                src="/images/headIcon.png"
                                alt=""
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-[#8DC63F]">
                            Who We Work With
                        </h3>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Let's Build Something Meaningful
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
                        We're excited to work with brands and institutions that align with our values of cultural respect and authentic storytelling.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {workCards.map((card) => (
                        <div key={card.id} className="relative pt-4">
                            {/* Thumbtack at top center */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
                                <div className="w-6 h-6 bg-yellow-400 rounded-full shadow-md flex items-center justify-center">
                                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                                </div>
                            </div>
                            {/* Card with background image - sticky note style */}
                            <div className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                                style={{
                                    backgroundImage: `url(${card.image})`,
                                    minHeight: '200px'
                                }}>
                                <div className="relative z-10 p-6 h-full flex items-center justify-center min-h-[200px]">
                                    <p className="text-gray-900 font-semibold text-center text-base md:text-lg lg:text-xl drop-shadow-sm">
                                        {card.text}
                                    </p>
                                </div>
                                {/* Curled bottom right corner effect */}
                                <div className="absolute bottom-0 right-0 w-12 h-12">
                                    <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-gray-200/40 to-gray-300/50 rounded-tl-full"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BuildSomething;