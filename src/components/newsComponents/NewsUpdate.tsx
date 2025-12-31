import Image from 'next/image';

const NewsUpdate = () => {
    const newsItems = [
        {
            image: '/images/news/n1.png',
            title: 'Global Story Map Now Live',
            description: 'Explore the world through a vibrant, fully interactive map. Search by country, river, gift tag, or contributor — and watch the world come to life.'
        },
        {
            image: '/images/news/n2.png',
            title: 'Audio Narration Launch',
            description: 'Listen to stories told in the contributor\'s original language or translated audio. Available in 70+ languages, with more coming soon.'
        },
        {
            image: '/images/news/n3.png',
            title: 'Mobile Experience Improved',
            description: 'Geofroggy is now optimized to let you submit stories on your phone, faster loading, cleaner design, and offline sharing support now live.'
        },
        {
            image: '/images/news/n4.png',
            title: 'Regional Hubs Expanded',
            description: 'New dedicated hubs for Southeast Asia, West Africa, Central Asia, and the Caribbean — highlighting local ambassadors and regional stories.'
        }
    ];

    return (
        <section className="py-12 md:py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Platform News & Updates
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

                    <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                        Stay informed about what's happening at Geofroggy — from exciting new features and rollouts to community growth and platform milestones. We're always evolving to help you connect through culture.
                    </p>
                </div>

                {/* News Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {newsItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="relative h-48 w-full rounded-xl overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover "
                                />
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-bold text-[#383838] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsUpdate;