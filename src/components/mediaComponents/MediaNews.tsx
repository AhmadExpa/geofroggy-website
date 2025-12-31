import Image from 'next/image';
import React from 'react';

interface NewsArticle {
    image: string;
    title: string;
    publication: string;
    link: string;
}

const MediaNews: React.FC = () => {
    const articles: NewsArticle[] = [
        {
            image: '/images/media/m1.png',
            title: '"Geofroggy Named Top Cultural Startup"',
            publication: 'Global Explorer Journal',
            link: '#'
        },
        {
            image: '/images/media/m2.png',
            title: '"Storytelling that Unites Borders"',
            publication: 'The Culture Times',
            link: '#'
        },
        {
            image: '/images/media/m3.png',
            title: '"Youth Voices Take Center Stage on Geofroggy"',
            publication: 'WorldEd News',
            link: '#'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            {/* Header */}
            <div className="text-center mb-12">
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
                    <h3 className="text-3xl font-semibold text-[#8DC63F]">In the News</h3>
                </div>

                <h2 className="text-2xl lg:text-5xl font-bold text-[#383838] mb-4">
                    Recent Press & Mention
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
                <p className="text-[#4B4B4B] max-w-3xl mx-auto">
                    See where Geofroggy is making headlines. We're proud to be featured by cultural and media voices around the world.
                </p>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    >
                        {/* Article Image */}
                        <div className="relative h-64 overflow-hidden p-2">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full rounded-xl object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Article Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-medium text-[#383838] mb-3 line-clamp-2">
                                {article.title}
                            </h3>


                            <div className="flex items-center justify-between">

                                <h3 className="text-xl font-semibold text-[#175883] mb-3 line-clamp-2">
                                    {article.publication}
                                </h3>
                                <a
                                    href={article.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-[#8DC63F] hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M6 3H3V13H13V10M10 3H13M13 3V6M13 3L6 10"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MediaNews;