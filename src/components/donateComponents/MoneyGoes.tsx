import Image from 'next/image';
import Link from 'next/link';

const MoneyGoes = () => {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        {/* Logo and Title */}
                        <div className="flex items-center justify-start gap-2 mb-3">
                            <div className="relative w-6 h-6 md:w-8 md:h-8">
                                <Image
                                    src="/images/headIcon.png"
                                    alt=""
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#8DC63F]">Where Money Goes</h3>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#383838] mb-4">
                            Small Gift. Big Ripples
                        </h2>

                        <div className="flex justify-start mb-4 md:mb-6">
                            <Image
                                src="/images/heading.png"
                                alt="Decorative line"
                                width={200}
                                height={16}
                                className="object-contain"
                            />
                        </div>


                        {/* Subheading */}
                        <p className="text-[#2C2C2C] text-base md:text-lg mb-6">
                            Your support helps us:
                        </p>

                        {/* List Items */}
                        <div className="space-y-5 mb-6">
                            {/* Item 1 */}
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#175883]">
                                        <circle cx="10" cy="10" r="10" fill="currentColor" />
                                        <path d="M10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5Z" fill="white" />
                                    </svg>
                                </div>
                                <p className="text-[#2C2C2C] text-sm md:text-base leading-relaxed">
                                    <span className="font-semibold">Enhance the Geofroggy experience</span> — We're improving our design and navigation to make exploring global stories more intuitive, accessible, and joyful for everyone.
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#175883]">
                                        <rect width="20" height="20" rx="2" fill="currentColor" />
                                        <path d="M10 6L12 9H8L10 6ZM6 14H14V12H6V14Z" fill="white" />
                                    </svg>
                                </div>
                                <p className="text-[#2C2C2C] text-sm md:text-base leading-relaxed">
                                    <span className="font-semibold">Build age-appropriate learning journeys</span> — From curious kids to lifelong learners, we're designing culturally rich content and timelines tailored to different ages and stages.
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#175883]">
                                        <rect width="20" height="20" rx="3" fill="currentColor" />
                                        <rect x="6" y="8" width="3" height="6" fill="white" />
                                        <rect x="11" y="8" width="3" height="6" fill="white" />
                                    </svg>
                                </div>
                                <p className="text-[#2C2C2C] text-sm md:text-base leading-relaxed">
                                    <span className="font-semibold">Spark engagement through interactivity</span> — We're developing story-based games, global scavenger hunts, and creative challenges that bring geography to life through play.
                                </p>
                            </div>
                        </div>

                        {/* Highlighted Quote Box */}
                        <div className="relative  border-l-4 border-[#8DC63F] p-4 md:p-4 mb-6">
                            <p className="text-[#2C2C2C] text-sm md:text-base leading-relaxed italic">
                                Every contribution helps us grow with integrity—and when we have more than we need, we give back. Our long-term goal is to fund cultural education, support young storytellers, and keep the world a little more connected.
                            </p>
                        </div>

                        {/* Donate Button */}
                        <Link
                            href="/donate"
                            className="inline-block bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white px-6 py-2 rounded-lg font-medium hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md"
                        >
                            Donate Now
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        {/* Green border effect with tilted background */}
                        <div className="absolute -top-4 -right-4 w-full h-full bg-[#8DC63F] rounded-lg transform rotate-2"></div>
                        <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/images/vlounteer.png" // Replace with your volunteer image
                                alt="Volunteers working together"
                                width={600}
                                height={500}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MoneyGoes