import Image from "next/image";
import Link from "next/link";

const StoryBelongsLetter = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#8DC63F] relative overflow-hidden mx-0 sm:mx-4 lg:mx-8 my-8 sm:my-12 lg:my-16 rounded-xl sm:rounded-2xl">
            {/* Background pattern image */}
            <div className="absolute inset-0 opacity-100">
                <Image
                    src="/images/newsbg.png"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>

            {/* Left decorative pattern - Hidden on mobile */}
            <div className="hidden lg:block absolute bottom-[200] left-[-60] w-48 h-full opacity-100">
                <Image
                    src="/images/newsright.png"
                    alt=""
                    fill
                    className="object-contain object-left"
                />
            </div>



            {/* Right decorative pattern - Hidden on mobile */}
            <div className="hidden lg:block absolute top-0 right-[-50] w-48 h-full opacity-40">
                <Image
                    src="/images/newsleft.png"
                    alt=""
                    fill
                    className="object-contain object-right"
                />
            </div>

            <div className="flex items-end gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto relative px-2 sm:px-0">

                {/* Left column (1 part) */}
                <div className="relative z-10 flex-[1] hidden md:block">
                    <div className="absolute bottom-0 left-8 w-64 h-64 md:w-80 md:h-80">
                        <Image
                            src="/images/storyletter.png"
                            alt=""
                            fill
                            className="object-contain object-bottom-left"
                        />
                    </div>
                </div>

                {/* Right column (2 parts) */}
                <div className="relative z-10 flex-[2] text-start sm:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Ready to share your world
                    </h2>

                    <div className="flex justify-start mb-4 sm:mb-6">
                        <Image
                            src="/images/blueHead.png"
                            alt="Decorative line"
                            width={250}
                            height={20}
                            className="object-contain w-full max-w-[200px] sm:max-w-[250px]"
                        />
                    </div>

                    <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-3xl">
                        Whether it's a childhood tradition, a local custom, or a moment that changed your view of the world – every story helps build a more connected and compassionate planet. Join thousands of voices shaping a global archive that educates, inspires, and brings us all closer together.
                    </p>

                    <Link
                        href="/submit-story"
                        className="inline-block bg-[#175883] hover:bg-[#152b47] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base transition-colors shadow-lg"
                    >
                        Share your experience
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default StoryBelongsLetter;