'use client';

import Image from 'next/image';
import { useState, useRef, useEffect, useCallback } from 'react';

interface TestimonialCardProps {
    image: string;
    text: string;
    quote: string;
    rating: number;
    name: string;
}

const TestimonialCard = ({ image, text, quote, rating, name }: TestimonialCardProps) => {
    return (
        <div className="max-w-2xl bg-white rounded-2xl shadow-lg p-8 flex gap-8 items-center">
            {/* Left image */}
            <div className="relative w-48 h-64 flex-shrink-0">
                <div className="absolute -top-4 -left-4 text-6xl font-bold text-black">
                    "
                </div>
                <Image
                    src={image}
                    alt="Testimonial"
                    fill
                    className="object-cover rounded-full"
                />
            </div>

            {/* Right content */}
            <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {text}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                    {quote}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.044 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
                        </svg>
                    ))}
                </div>

                <p className="font-medium text-gray-900">{name}</p>
            </div>
        </div>
    );
};

export default function PeopleLove() {
    const [activeSlide, setActiveSlide] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const testimonials = [
        {
            image: 'https://i.pravatar.cc/400?img=47',
            text: 'Great for teaching my kids something new about the world',
            quote: '"Every Friday, my children and I read Copedia together. It\'s become our favorite way to explore different cultures without leaving home."',
            rating: 5,
            name: 'Anika, India'
        },
        {
            image: 'https://i.pravatar.cc/400?img=25',
            text: 'Great for teaching my kids something new about the world',
            quote: '"Every Friday, my children and I read Copedia together. It\'s become our favorite way to explore different cultures without leaving home."',
            rating: 5,
            name: 'Anika, India'
        },
        {
            image: 'https://i.pravatar.cc/400?img=33',
            text: 'Great for teaching my kids something new about the world',
            quote: '"Every Friday, my children and I read Copedia together. It\'s become our favorite way to explore different cultures without leaving home."',
            rating: 4.5,
            name: 'Anika, India'
        }
    ];

    const scrollToSlide = useCallback((index: number) => {
        if (scrollRef.current) {
            const cards = scrollRef.current.children;
            if (cards[index]) {
                const card = cards[index] as HTMLElement;
                const cardLeft = card.offsetLeft;
                scrollRef.current.scrollTo({ left: cardLeft, behavior: 'smooth' });
            }
        }
    }, []);

    const stopAutoScroll = useCallback(() => {
        if (autoScrollIntervalRef.current) {
            clearInterval(autoScrollIntervalRef.current);
            autoScrollIntervalRef.current = null;
        }
    }, []);

    const startAutoScroll = useCallback(() => {
        stopAutoScroll();
        autoScrollIntervalRef.current = setInterval(() => {
            setActiveSlide((prev) => {
                const nextIndex = (prev + 1) % testimonials.length;
                scrollToSlide(nextIndex);
                return nextIndex;
            });
        }, 4000); // Change slide every 4 seconds
    }, [testimonials.length, scrollToSlide, stopAutoScroll]);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const scrollLeft = scrollRef.current.scrollLeft;
                const cards = scrollRef.current.children;
                let closestIndex = 0;
                let closestDistance = Infinity;

                for (let i = 0; i < cards.length; i++) {
                    const card = cards[i] as HTMLElement;
                    const cardLeft = card.offsetLeft;
                    const distance = Math.abs(scrollLeft - cardLeft);
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestIndex = i;
                    }
                }

                setActiveSlide(closestIndex);
            }
        };

        if (scrollRef.current) {
            scrollRef.current.addEventListener('scroll', handleScroll);
            return () => {
                if (scrollRef.current) {
                    scrollRef.current.removeEventListener('scroll', handleScroll);
                }
            };
        }
    }, []);

    // Auto-scroll functionality
    useEffect(() => {
        startAutoScroll();
        return () => {
            stopAutoScroll();
        };
    }, [startAutoScroll, stopAutoScroll]);

    return (
        <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-7xl mx-auto">
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
                    <h3 className="text-2xl font-semibold text-[#8DC63F]">People Love Copedia</h3>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#383838] mb-4 text-center">
                    What Our Readers Say
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

                <div className="relative overflow-hidden mt-8">
                    <div
                        ref={scrollRef}
                        className="flex gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        onMouseEnter={stopAutoScroll}
                        onMouseLeave={startAutoScroll}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex-shrink-0 snap-center w-full max-w-3xl">
                                <TestimonialCard
                                    image={testimonial.image}
                                    text={testimonial.text}
                                    quote={testimonial.quote}
                                    rating={testimonial.rating}
                                    name={testimonial.name}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    stopAutoScroll();
                                    scrollToSlide(index);
                                    // Restart auto-scroll after 4 seconds
                                    setTimeout(() => {
                                        startAutoScroll();
                                    }, 4000);
                                }}
                                className={`w-3 h-3 rounded-full transition-all ${activeSlide === index
                                    ? 'bg-[#8DC63F] w-8'
                                    : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}