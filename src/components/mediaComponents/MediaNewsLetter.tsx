import Image from "next/image";
import Link from "next/link";

const MediaNewsLetter = () => {
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


            {/* Right decorative pattern - Hidden on mobile */}
            <div className="hidden lg:block absolute top-0 right-[-50px] w-64 h-full opacity-100">
                <Image
                    src="/images/newsleft.png"
                    alt=""
                    fill
                    className="object-contain object-right"
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10 px-2 sm:px-0">

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Partner or Feature Geofroggy
                </h2>
                <div className="flex justify-start mb-4 sm:mb-6">
                    <Image
                        src="/images/heading.png"
                        alt="Decorative line"
                        width={250}
                        height={20}
                        className="object-contain w-full max-w-[200px] sm:max-w-[250px]"
                    />
                </div>

                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl">
                    Want to collaborate, host an event, or interview our team? We'd love to connect.
                </p>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <div className="flex items-center gap-2 sm:gap-3 text-white text-sm sm:text-base md:text-lg">
                        <span className="text-xl sm:text-2xl">📢</span>
                        <span>Request Interview or Speaker</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-white text-sm sm:text-base md:text-lg">
                        <span className="text-xl sm:text-2xl">🤝</span>
                        <span>Media Partnership Proposal</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-white text-sm sm:text-base md:text-lg">
                        <span className="text-xl sm:text-2xl">💬</span>
                        <span>Use Case or Showcase Story</span>
                    </div>
                </div>

                <Link
                    href="/submit-story"
                    className="inline-block bg-gradient-to-b from-[#8DC63F] to-[#426F05] hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base"
                >
                    Become a Contributor
                </Link>
            </div>
        </section>
    );
};

export default MediaNewsLetter;