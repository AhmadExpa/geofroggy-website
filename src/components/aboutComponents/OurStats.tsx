const OurStats = () => {
    const stats = [
        {
            number: "74+",
            label: "Active Countries"
        },
        {
            number: "12,000+",
            label: "Stories Shared Worldwide"
        },
        {
            number: "250+",
            label: "Cultural Tags"
        },
        {
            number: "30+",
            label: "Languages Represented"
        },
        {
            number: "400+",
            label: "Community Collaborations"
        }
    ];

    return (
        <section className="py-8 md:py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8DC63F] mb-2">
                                {stat.number}
                            </h3>
                            <p className="text-sm md:text-base text-gray-700 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurStats