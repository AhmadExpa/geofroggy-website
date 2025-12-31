import Image from 'next/image';

const PartnerHero = () => {
    return (
        <section className="relative w-full min-h-screen sm:h-screen overflow-hidden py-12 sm:py-0" style={{ background: 'linear-gradient(to right, #E1F3FF 0%, #ECFFE1 100%)' }}>

            {/* Left Circle Decoration - Hidden on mobile */}
            <div className="hidden lg:block absolute left-[-300px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] z-[1]">
                <Image
                    src="/images/circle.png"
                    alt=""
                    width={600}
                    height={600}
                    className="w-full h-full"
                />
            </div>

            {/* Right Circle Decoration - Hidden on mobile */}
            <div className="hidden lg:block absolute right-[-300px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] z-[1]">
                <Image
                    src="/images/circle.png"
                    alt=""
                    width={600}
                    height={600}
                    className="w-full h-full"
                />
            </div>

            {/* Container */}
            <div className="relative sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 max-w-[1400px] w-full px-4 sm:px-6 md:px-[40px] lg:px-[60px] flex items-center justify-between gap-6 sm:gap-8 lg:gap-[60px] z-[2] lg:flex-row flex-col lg:text-left text-center">

                {/* Left Content */}
                <div className="flex-1 max-w-[600px] w-full">
                    {/* Submit Badge */}
                    <div
                        className="relative bg-[#8DC63F] px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg inline-block mb-4 overflow-hidden"
                        style={{
                            maskImage:
                                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                            WebkitMaskImage:
                                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                        }}
                    >
                        {/* Left blurred lights */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-24 h-24">
                            <div className="absolute inset-0 rounded-full bg-white/30 blur-3xl"></div>
                            <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl translate-x-6 translate-y-4"></div>
                            <div className="absolute inset-0 rounded-full bg-white/15 blur-xl -translate-x-2 translate-y-6"></div>
                        </div>

                        {/* Right blurred foliage */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-32 h-32">
                            <div className="absolute inset-0 bg-[#8DC63F]/50 blur-3xl rounded-full"></div>
                            <div className="absolute inset-0 bg-[#8DC63F]/40 blur-2xl rounded-full translate-x-4 -translate-y-4"></div>
                            <div className="absolute inset-0 bg-[#8DC63F]/35 blur-xl rounded-full -translate-x-2 translate-y-4"></div>
                        </div>

                        <h2 className="relative text-white text-xl sm:text-2xl md:text-3xl font-bold z-10">
                            Partner with Us
                        </h2>
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl sm:text-[32px] md:text-[42px] lg:text-[48px] xl:text-[58px] font-extrabold text-[#383838] leading-[1.2] mb-4 sm:mb-6">
                        Help Us Put the World Together
                    </h1>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-600 leading-[1.7] max-w-[520px] mx-auto lg:mx-0">
                        We're always looking for new partners who share our vision of creating a more connected and understanding world. If you're interested in partnering with us, please contact us.
                    </p>
                </div>

                {/* Right Content - Image Section */}
                <div className="flex-1 relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] w-full">


                    {/* Man Image */}
                    <div className="relative z-[2] max-w-[300px] sm:max-w-[400px] md:max-w-[500px] w-full">
                        <Image
                            src="/images/earth.png"
                            alt="Man with tablet"
                            width={500}
                            height={500}
                            className="w-full h-auto"
                            priority
                        />
                    </div>


                </div>
            </div>
        </section>
    );
}

export default PartnerHero;