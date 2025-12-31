'use client';

import Image from 'next/image';

interface AuthLayoutProps {
    children: React.ReactNode;
    imageSrc: string;
}

const AuthLayout = ({ children, imageSrc }: AuthLayoutProps) => {
    return (
        <div className="container mx-auto h-screen relative">
            {/* Background image should not intercept clicks */}
            <div className="absolute inset-0 opacity-100 pointer-events-none">
                <Image
                    src="/images/sectionBg.png"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>

            <div className="grid lg:grid-cols-2  items-start max-w-7xl mx-auto relative z-10">

                {/* Left Side - Image Card with Blue Header */}
                <div className="space-y-6 lg:sticky lg:top-8">
                    <div className="  overflow-hidden ">
                        {/* Blue Header with Logo */}
                        <div className="relative h-16 overflow-hidden">
                            {/* Blue Pattern Background */}
                            <Image
                                src="/images/bluePattern.png"
                                alt="Blue pattern background"
                                fill
                                className="object-cover"
                            />

                            {/* Logo */}
                            <div className="relative z-10 h-full flex items-center justify-center">
                                <Image
                                    src="/images/logo.png"
                                    alt="Geofroggy logo"
                                    width={120}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <Image
                                src={imageSrc}
                                alt="Window view"
                                width={500}
                                height={500}
                                className="w-full h-auto mt-[-30] object-cover"
                            />
                        </div>


                    </div>
                </div>

                {/* Right Side - Form (children) */}
                <div className="lg:pt-0">
                    {children}
                </div>

            </div>
        </div>
    );
}

export default AuthLayout;
