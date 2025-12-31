import Image from 'next/image';
import Link from 'next/link';

const Subscription = () => {
    const avatars = [
        { src: 'https://i.pravatar.cc/150?img=1', position: 'top-12 left-20' },
        { src: 'https://i.pravatar.cc/150?img=5', position: 'top-8 right-32' },
        { src: 'https://i.pravatar.cc/150?img=9', position: 'top-28 left-12' },
        { src: 'https://i.pravatar.cc/150?img=12', position: 'top-24 right-20' },
        { src: 'https://i.pravatar.cc/150?img=16', position: 'bottom-20 left-32' },
        { src: 'https://i.pravatar.cc/150?img=20', position: 'bottom-16 right-24' },
    ];

    return (
        <section className="relative py-24 px-6 overflow-hidden">
            <div className="absolute inset-0 opacity-100">
                <Image
                    src="/images/sectionBg.png"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>

            {avatars.map((avatar, index) => (
                <div key={index} className={`absolute hidden lg:block ${avatar.position}`}>
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image
                            src={avatar.src}
                            alt=""
                            width={64}
                            height={64}
                            className="object-cover"
                        />
                    </div>
                </div>
            ))}

            <div className="relative max-w-2xl mx-auto text-center space-y-6">
                <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="relative w-6 h-6 md:w-8 md:h-8">
                        <Image
                            src="/images/headIcon.png"
                            alt=""
                            width={32}
                            height={32}
                            className="object-contain"
                        />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#8DC63F]">Subscription CTA</h3>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#383838] mb-4">
                    Subscribe to Copedia
                </h2>

                <div className="flex justify-center mb-4 md:mb-6">
                    <Image
                        src="/images/heading.png"
                        alt="Decorative line"
                        width={200}
                        height={16}
                        className="object-contain"
                    />
                </div>

                <p className="text-gray-700 text-lg">
                    Stay updated with our latest cultural insights, stories, and discoveries delivered straight to your inbox.
                </p>

                <form className="space-y-4 pt-4">
                    <input
                        type="email"
                        placeholder="Enter Email here"
                        className="w-full max-w-md mx-auto px-6 py-3 border border-gray-300 rounded-md text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7ED957] focus:border-transparent"
                    />
                </form>
                <Link
                    href="/sign-up"
                    className="inline-block bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white px-6 py-2 rounded-lg font-medium hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md"
                >
                    Sign Up
                </Link>
            </div>
        </section>
    );
}

export default Subscription;