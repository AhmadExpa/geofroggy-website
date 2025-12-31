import Image from 'next/image';
import React from 'react';

interface GalleryImage {
    src: string;
    alt: string;
    className?: string;
}

const MediaGallery: React.FC = () => {
    const galleryImages: GalleryImage[] = [
        {
            src: '/images/media/m4.png',
            alt: 'Day of the Dead celebration',
            className: 'row-span-2'
        },
        {
            src: '/images/media/m5.png',
            alt: 'Traditional dance performers',
            className: ''
        },
        {
            src: '/images/media/m6.png',
            alt: 'Cultural portrait',
            className: 'row-span-2'
        },
        {
            src: '/images/media/m7.png',
            alt: 'Traditional costume',
            className: ''
        },
        {
            src: '/images/media/m8.png',
            alt: 'Carnival decorations',
            className: 'h-64'
        },
        {
            src: '/images/media/m9.png',
            alt: 'Lion dance performance',
            className: 'h-64'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            {/* Header */}
            <h2 className="text-2xl lg:text-5xl font-bold justify-center text-center text-[#383838] mb-4">
                Approved images & Photography
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
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
                {galleryImages.map((image, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden rounded-xl group cursor-pointer ${image.className}`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MediaGallery;