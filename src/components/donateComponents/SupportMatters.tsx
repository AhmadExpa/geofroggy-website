import Image from "next/image";

interface StoryImage {
    id: number;
    image: string;
    alt: string;
}

const storyImages: StoryImage[] = [
    {
        id: 1,
        image: "/images/img.png",
        alt: "Cultural festival celebration",
    },
    {
        id: 2,
        image: "/images/img.png",
        alt: "Traditional celebration",
    },
    {
        id: 3,
        image: "/images/img.png",
        alt: "Festival costumes",
    },
    {
        id: 4,
        image: "/images/img.png",
        alt: "Social gathering",
    },
];

const SupportMatters = () => {
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


                {/* Main Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Why Your Support Matters
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
                        Your are not just donation - Your are Amplyfying Humanity
                    </p>
                    <p className="text-[#4B4B4B] text-sm md:text-base lg:text-lg leading-relaxed mb-10 text-center">
                        Our platform is built to bring those stories to life. Whether you're sharing childhood memories from a rural town or exploring the vibrancy of a bustling metropolis, your voice contributes to a global archive of human experience. By weaving your narratives into our shared landscape, we create a deeper, richer understanding of the world we live in.
                    </p>


                    {/* helo */}
                    <div className="relative bg-[#E8F4F8] border-2 border-dashed border-[#8DC63F] rounded-lg px-8 py-4">
                        {/* Vertical dark blue line on the left */}
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#175883] rounded-l-lg"></div>

                        {/* Quote marks on top right */}
                        <div className="absolute top-6 right-6 md:top-8 md:right-8">
                            <Image
                                src="/images/coma.png"
                                alt=""
                                width={50}
                                height={50}
                                className="object-contain opacity-90"
                            />
                        </div>

                        {/* Quote text */}
                        <p className="text-[#175883] text-base md:text-lg lg:text-xl font-semibold leading-relaxed mb-6 pl-4 md:pl-6">
                            "When I shared my story, I didn't just write history — I felt seen."
                        </p>

                        {/* Profile section */}
                        <div className="flex items-center gap-3 pl-4 md:pl-6">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0">
                                <Image
                                    src="/images/profile-placeholder.jpg" // Replace with actual image
                                    alt="Contributor"
                                    width={48}
                                    height={48}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <p className="text-[#175883] text-sm md:text-base italic">
                                A contributor from Sierra Leone
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default SupportMatters;