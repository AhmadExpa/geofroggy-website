import Image from "next/image";

const AdvertiseNewsLetter = () => {
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
            <div className="hidden lg:block absolute bottom-[100] left-[-60] w-48 h-full opacity-100">
                <Image
                    src="/images/newsleft.png"
                    alt=""
                    fill
                    className="object-contain object-left"
                />
            </div>

            {/* Right decorative pattern - Hidden on mobile */}
            <div className="hidden lg:block absolute top-[80] right-[-50] w-48 h-full opacity-80">
                <Image
                    src="/images/newsleft.png"
                    alt=""
                    fill
                    className="object-contain object-right"
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10 text-center px-2 sm:px-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Get in Touch
                </h2>

                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
                    To receive our full media kit or to inquire about partnership rates and availability, email us at:
                </p>

                <div className="flex items-center justify-center gap-3">
                    <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                    </svg>
                    <a
                        href="mailto:partnerships@geofroggy.com"
                        className="text-[#175883] text-base sm:text-lg md:text-xl underline hover:text-[#175883] transition-colors"
                    >
                        partnerships@geofroggy.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AdvertiseNewsLetter;