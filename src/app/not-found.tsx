'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
    const router = useRouter();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    router.push('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-100">
                <Image
                    src="/images/sectionBg.png"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>

            <div className="max-w-2xl mx-auto text-center relative z-10">
                <div className="mb-8">
                    <h1 className="text-9xl md:text-[12rem] font-bold text-[#8DC63F] mb-4">
                        404
                    </h1>
                    <div className="flex justify-center mb-6">
                        <Image
                            src="/images/heading.png"
                            alt="Decorative line"
                            width={250}
                            height={20}
                            className="object-contain"
                        />
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Page Not Found
                </h2>

                <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-xl mx-auto">
                    Oops! The page you're looking for doesn't exist. You'll be redirected to the home page in{' '}
                    <span className="font-bold text-[#8DC63F] text-2xl">{countdown}</span> seconds.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/"
                        className="bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Go Home Now
                    </Link>
                    <button
                        onClick={() => router.back()}
                        className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all shadow-md"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

