import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="relative bg-gradient-to-b from-[#175883] to-[rgba(23,88,131,0)] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[#175883]/60 z-0"></div>


                {/* Background image anchored to bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-full opacity-100">
                    <Image
                        src="/images/footerBg2.png"
                        alt=""
                        fill
                        className="object-cover object-bottom"
                    />
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-full opacity-50">
                    <Image
                        src="/images/footerBg.png"
                        alt=""
                        fill
                        className="object-contain object-bottom"
                    />
                </div>


                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                    {/* Top Section - Logo and Newsletter */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                        {/* Left Section - Logo and Description */}
                        <div>
                            <div className="mb-4">
                                <Image
                                    src="/images/footerLogo.png"
                                    alt="Geofroggy"
                                    width={200}
                                    height={100}
                                    className="object-contain w-32 sm:w-40 md:w-48 lg:w-[200px] h-auto"
                                />
                            </div>


                        </div>

                        {/* Newsletter Section */}
                        <div className="flex items-start justify-start lg:justify-end">
                            <div className="w-full max-w-md py-6 sm:py-8 shadow-2xl px-4 sm:px-6 md:px-8 rounded-2xl sm:rounded-full">
                                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Newsletter:</h3>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter Email here"
                                        className="flex-1 w-full px-4 py-2.5 rounded-lg bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#8DC63F]"
                                    />
                                    <button className="bg-[#8DC63F] hover:bg-[#7AB62F] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap w-full sm:w-auto">
                                        Notify
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-6 sm:mb-8">
                        {/* Explore Geofroggy */}
                        <div className="sm:col-span-2 md:col-span-1">

                            <p className="text-xs sm:text-sm italic mb-3 sm:mb-4 max-w-md">
                                Explore global stories, join meaningful conversations, and be part of a worldwide community where every place has a voice.
                            </p>

                            <p className="text-xs sm:text-sm mb-4 sm:mb-6 max-w-md">
                                Let geography become your guide to understanding people, traditions, and perspectives.
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6">
                                <Link href="https://facebook.com" target="_blank" className="w-9 h-9 rounded-full bg-[#8DC63F] hover:bg-[#7AB62F] flex items-center justify-center transition-colors">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </Link>
                                <Link href="https://linkedin.com" target="_blank" className="w-9 h-9 rounded-full bg-[#8DC63F] hover:bg-[#7AB62F] flex items-center justify-center transition-colors">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </Link>
                                <Link href="https://instagram.com" target="_blank" className="w-9 h-9 rounded-full bg-[#8DC63F] hover:bg-[#7AB62F] flex items-center justify-center transition-colors">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Explore Geofroggy</h3>
                            <ul className="space-y-2 sm:space-y-2.5">
                                <li><Link href="/" className="text-xs sm:text-sm hover:text-[#8DC63F] transition-colors">Home</Link></li>
                                <li><Link href="/about" className="text-xs sm:text-sm hover:text-[#8DC63F] transition-colors">About</Link></li>
                                {/* <li><Link href="/explore" className="text-xs sm:text-sm hover:text-[#8DC63F] transition-colors">Explore</Link></li> */}
                                <li><Link href="/news" className="text-xs sm:text-sm hover:text-[#8DC63F] transition-colors">News</Link></li>
                                <li><Link href="/copedia" className="text-xs sm:text-sm hover:text-[#8DC63F] transition-colors">Copedia</Link></li>
                            </ul>
                        </div>

                        {/* Community & Support */}
                        <div>
                            <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Community & Support</h3>
                            <ul className="space-y-2 sm:space-y-2.5">
                                <li><Link href="/submit-story" className="text-xs sm:text-sm hover:text-[#8DC63F] transition-colors">Submit a Story</Link></li>
                                {/* <li><Link href="/ambassador" className="text-xs sm:text-sm hover:text-[#8DC63F] transition-colors">Become an Ambassador</Link></li> */}
                                <li><Link href="/get-involved" className="text-xs sm:text-sm hover:text-[#8DC63F] transition-colors">Get Involved</Link></li>
                                <li><Link href="/donate" className="text-xs sm:text-sm hover:text-[#8DC63F] transition-colors">Donate</Link></li>
                            </ul>
                        </div>

                        {/* Collaborate */}
                        <div>
                            <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Collaborate</h3>
                            <ul className="space-y-2 sm:space-y-2.5">
                                <li><Link href="/advertise" className="text-xs sm:text-sm hover:text-[#8DC63F] transition-colors">Advertise with Us</Link></li>
                                <li><Link href="/partner-with-us" className="text-xs sm:text-sm hover:text-[#8DC63F] transition-colors">Partner With Us</Link></li>
                                <li><Link href="/media" className="text-xs sm:text-sm hover:text-[#8DC63F] transition-colors">Media Hub</Link></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Legal</h3>
                            <ul className="space-y-2 sm:space-y-2.5">
                                <li><Link href="/faq" className="text-xs sm:text-sm hover:text-[#8DC63F] transition-colors">FAQs</Link></li>
                                <li><Link href="/contact" className="text-xs sm:text-sm hover:text-[#8DC63F] transition-colors">Contact Us</Link></li>
                                <li><Link href="/community-guidelines" className="text-xs sm:text-sm hover:text-[#8DC63F] transition-colors">Community Guidelines</Link></li>
                                <li><Link href="/term-of-use" className="text-xs sm:text-sm hover:text-[#8DC63F] transition-colors">Terms of Use</Link></li>
                                <li><Link href="/private-policy" className="text-xs sm:text-sm hover:text-[#8DC63F] transition-colors">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>


                </div>

            </footer>
            <div className="border-t border-white/20 bg-[#00416D] py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center text-white text-center px-4 sm:px-6 gap-2 sm:gap-0">
                <p className="text-xs sm:text-sm">© 2025 Geofroggy.</p>
                <p className="text-xs sm:text-sm hidden sm:block">Celebrating Cultures. Connecting People. One Story at a Time.</p>
                <p className="text-xs sm:text-sm sm:hidden">Celebrating Cultures. Connecting People.</p>
                <p className="text-xs sm:text-sm">All Rights Reserved</p>
            </div>


        </>

    );
};

export default Footer;