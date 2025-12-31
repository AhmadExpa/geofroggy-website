import Image from "next/image";
import Link from "next/link";

const AboutNewsLetter = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#175883] relative overflow-hidden mx-0 sm:mx-4 lg:mx-8 my-8 sm:my-12 lg:my-16 rounded-xl sm:rounded-2xl">
            {/* Background pattern image */}
            <div className="absolute inset-0 opacity-40">
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
                    src="/images/newsleft.png"
                    alt=""
                    fill
                    className="object-contain object-left"
                />
            </div>

            {/* Right decorative pattern - Hidden on mobile */}
            <div className="hidden lg:block absolute top-0 right-[-50] w-48 h-full opacity-80">
                <Image
                    src="/images/newsright.png"
                    alt=""
                    fill
                    className="object-contain object-right"
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10 text-center px-2 sm:px-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Join Our Global Moment
                </h2>
                <div className="flex justify-center mb-4 sm:mb-6">
                    <Image
                        src="/images/heading.png"
                        alt="Decorative line"
                        width={250}
                        height={20}
                        className="object-contain w-full max-w-[200px] sm:max-w-[250px]"
                    />
                </div>


                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
                    Whether it's a childhood tradition, a local custom, or a moment that changed your view of the world – every story helps build a more connected and compassionate planet. Join thousands of voices shaping a global archive that educates, inspires, and brings us all closer together.
                </p>

                <Link
                    href="/submit-story"
                    className="inline-block bg-gradient-to-b from-[#8DC63F] to-[#426F05] hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base"
                >
                    Share your experience
                </Link>

            </div>
        </section>
    );
};

export default AboutNewsLetter;