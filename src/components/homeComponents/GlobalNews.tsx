import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  image: string;
  summary: string;
  location: string;
  date: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "New Cultural Heritage Sites in Europe Recognized by UNESCO",
    image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&h=400&fit=crop",
    summary: "Five new European sites—including ancient villages in Italy and ceremonial forests in Romania—have been granted UNESCO protection. A huge win for cultural preservation and tourism.",
    location: "Europe",
    date: "April 06, 2024",
    link: "/news/1",
  },
  {
    id: 2,
    title: "Elections Announced In West African Nations",
    image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&h=400&fit=crop",
    summary: "Several countries across West Africa prepare for landmark democratic elections this year. Local communities gear up for peaceful participation, with youth movements leading civic awareness campaigns.",
    location: "Africa",
    date: "April 04, 2024",
    link: "/news/2",
  },
  {
    id: 3,
    title: "Humanitarian Aid Expanded to Southeast Asia",
    image: "https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?w=600&h=400&fit=crop",
    summary: "Following devastating floods, several NGOs and governments have mobilized cross-border aid efforts in Cambodia, Laos, and Vietnam, focusing on schools and healthcare services.",
    location: "Asia",
    date: "March 10, 2024",
    link: "/news/3",
  },
];

const GlobalNews = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative w-8 h-8">
              <Image
                src="/images/headIcon.png"
                alt=""
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#8DC63F]">Global News</h3>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What's Happening Around the World
          </h2>
          <div className="flex justify-start mb-6">
            <Image
              src="/images/heading.png"
              alt="Decorative line"
              width={250}
              height={20}
              className="object-contain"
            />
          </div>
          <p className="text-gray-600 text-sm md:text-base max-w-4xl leading-relaxed">
            Stay informed with important cultural, political, and social news from across the globe. This curated feed highlights the major events and human stories shaping our world – from breakthroughs and crises to moments of cultural celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <Link
              key={news.id}
              href={news.link}
              className="group block bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-3 line-clamp-2">
                  {news.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  <span className="font-semibold text-gray-800">Summary:</span>{" "}
                  {news.summary}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  {/* Location */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#8DC63F]" />
                    <span className="text-sm text-gray-700 font-medium">
                      {news.location}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-pink-500"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="8"
                        y1="8"
                        x2="8"
                        y2="4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="8"
                        y1="8"
                        x2="11"
                        y2="8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>{news.date}</span>
                  </div>
                </div>
              </div>
            </Link>

          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalNews;