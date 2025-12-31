import Image from 'next/image';

interface OpportunityCard {
    id: number;
    image: string;
    title: string;
    description: string;
}

const AdvertisingOpportunity = () => {
    const opportunities: OpportunityCard[] = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=300&fit=crop',
            title: 'Branded Cultural Challenges',
            description: 'Sponsor scavenger hunts or storytelling games with your logo woven in.'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop',
            title: 'Feature Country/Topic:',
            description: 'Align your brand with a region or theme (e.g., \'Voices from Latin America\').'
        },
        {
            id: 3,
            image: '/images/laptop.png',
            title: 'Newsletter & Social Sponsorships',
            description: 'Place your message in cultural dispatches and quizzes.'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
            title: 'In-Platform Display Ads',
            description: '(Coming Soon) Clean, ethical ad placements built into storytelling flows.'
        }
    ];

    return (
        <section className="relative py-12 px-6">

            <div className="relative max-w-7xl mx-auto ">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#383838] mb-4 text-center">
                    Advertising Opportunities
                </h2>

                <div className="flex justify-center mb-8 md:mb-6">
                    <Image
                        src="/images/heading.png"
                        alt="Decorative line"
                        width={200}
                        height={16}
                        className="object-contain"
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
                    {opportunities.map((opportunity) => (
                        <div key={opportunity.id} className="bg-white rounded-2xl  overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src={opportunity.image}
                                    alt={opportunity.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-medium text-[#383838] mb-3">
                                    {opportunity.title}
                                </h3>
                                <p className="text-[#383838] font-light leading-relaxed text-md">
                                    {opportunity.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AdvertisingOpportunity;