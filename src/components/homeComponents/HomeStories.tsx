import Image from "next/image";

interface StoryImage {
    id: number;
    image: string;
    alt: string;
}

const storyImages: StoryImage[] = [
    {
        id: 1,
        image: "/images/home/h1.png",
        alt: "Cultural festival celebration",
    },
    {
        id: 2,
        image: "/images/home/h2.png",
        alt: "Traditional celebration",
    },
    {
        id: 3,
        image: "/images/home/h3.png",
        alt: "Festival costumes",
    },
    {
        id: 4,
        image: "/images/home/h4.png",
        alt: "Social gathering",
    },
];

const HomeStories = () => {
    return (
        <section className="relative py-16 px-6 bg-white overflow-hidden">
            {/* Decorative Frog Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
                <Image
                    src="/images/headIcon.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>


            <div className="max-w-7xl mx-auto relative z-10">
                {/* Logo and Title */}
                <div className="flex items-center justify-center gap-2 mb-6">
                    <Image
                        src="/images/headIcon.png"
                        alt="Geofroggy logo"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-[#8DC63F]">
                        Geofroggy
                    </h1>
                </div>

                {/* Main Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Stories Beyond Borders
                    </h2>
                    <div className="flex justify-center mb-8">
                        <Image
                            src="/images/heading.png"
                            alt="Decorative line"
                            width={250}
                            height={20}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Content Text */}
                <div className="max-w-4xl mx-auto mb-12">
                    <p className="text-[#4B4B4B] text-sm md:text-base lg:text-lg leading-relaxed mb-4 text-center">
                        At Geofroggy, we believe that geography is more than coordinates on a map — it's the heartbeat of human connection. Every village, city, mountain, and street carries a story. Every tradition, festival, and encounter becomes part of a much larger tapestry that binds us together across cultures.
                    </p>
                    <p className="text-[#4B4B4B] text-sm md:text-base lg:text-lg leading-relaxed mb-10 text-center">
                        Our platform is built to bring those stories to life. Whether you're sharing childhood memories from a rural town or exploring the vibrancy of a bustling metropolis, your voice contributes to a global archive of human experience. By weaving your narratives into our shared landscape, we create a deeper, richer understanding of the world we live in.
                    </p>

                    {/* Quote Box */}
                    <div className="relative bg-[#E8F4F8] border-2 border-dashed border-[#8DC63F] rounded-lg p-8 md:p-10 lg:p-12">
                        {/* Vertical dark blue line on the left */}
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#175883] rounded-l-lg"></div>

                        {/* Quote marks on top right */}
                        <div className="absolute top-6 right-6 md:top-8 md:right-8">
                            <Image
                                src="/images/coma.png"
                                alt=""
                                width={50}
                                height={50}
                                className="object-contain opacity-30"
                            />
                        </div>

                        <p className="text-[#175883] text-sm md:text-base lg:text-lg font-semibold leading-relaxed text-left pl-6 md:pl-8 pr-12 md:pr-16">
                            To unite people by celebrating the diversity of our planet — through personal stories, cultural insight, and a shared sense of belonging.
                        </p>
                    </div>
                </div>

                {/* Image Gallery */}
                <div className="relative mt-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {storyImages.map((story) => (
                            <div
                                key={story.id}
                                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative w-full h-64 md:h-72 lg:h-80">
                                    <Image
                                        src={story.image}
                                        alt={story.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeStories;