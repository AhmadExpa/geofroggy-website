import Image from 'next/image';

const VoiceMatters = () => {
    return (
        <section className="min-h-screen flex items-center py-12 px-6 bg-white">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-stretch">

                    {/* Left Side - Single Image */}
                    <div className="relative bg-gray-50 rounded-3xl  flex items-center justify-center h-full">
                        <div className="rounded-2xl overflow-hidden">
                            <Image
                                src="/images/voice.png"
                                alt="Cultural representation"
                                width={500}
                                height={500}
                                className=" object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6 flex flex-col justify-start h-full">
                        {/* Title */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                Why Your Voice Matters?
                            </h2>
                            <div className="flex justify-start mb-8">
                                <Image
                                    src="/images/heading.png"
                                    alt="Decorative line"
                                    width={250}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Description Paragraphs */}
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Every photo holds a piece of history, culture, or identity. When you share your moments — whether it's a family recipe, a neighborhood celebration, or a quiet ritual passed down through generations — you open a window into your world. Your story adds a vital thread to the global tapestry of experiences.
                            </p>
                            <p>
                                At Geofroggy, we believe that personal stories create powerful bridges between people, places, and perspectives. Together, we're not just documenting life - we're celebrating what makes it meaningful.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-6 pt-6">
                            {/* Cultural Wisdom */}
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">✓</span>
                                <span className="text-lg font-semibold text-blue-900">
                                    Cultural Wisdom
                                </span>
                            </div>

                            {/* Personal Journeys */}
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">🌍</span>
                                <span className="text-lg font-semibold text-blue-900">
                                    Personal Journeys
                                </span>
                            </div>

                            {/* Local Lenses */}
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">📷</span>
                                <span className="text-lg font-semibold text-blue-900">
                                    Local Lenses
                                </span>
                            </div>

                            {/* Bridge Builders */}
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">🤝</span>
                                <span className="text-lg font-semibold text-blue-900">
                                    Bridge Builders
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default VoiceMatters;