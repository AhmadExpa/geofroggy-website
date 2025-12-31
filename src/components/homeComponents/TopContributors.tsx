import Image from "next/image";
import Link from "next/link";

interface Contributor {
  id: number;
  name: string;
  image: string;
  badge: {
    flag: string;
    text: string;
  };
  description: string;
  country: string;
  countryLink: string;
}

const contributors: Contributor[] = [
  {
    id: 1,
    name: "Adam Watts",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    badge: {
      flag: "/images/nigeria-flag.svg",
      text: "Colors of Kano",
    },
    description: "Amina is a photographer and cultural archivist based in northern Nigeria.",
    country: "USA",
    countryLink: "/countries/usa",
  },
  {
    id: 2,
    name: "Luca Romano",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    badge: {
      flag: "/images/nigeria-flag.svg",
      text: "Colors of Kano",
    },
    description: "Amina is a photographer and cultural archivist based in northern Nigeria.",
    country: "Italy",
    countryLink: "/countries/italy",
  },
  {
    id: 3,
    name: "Anaya Patel",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    badge: {
      flag: "/images/nigeria-flag.svg",
      text: "Colors of Kano",
    },
    description: "Amina is a photographer and cultural archivist based in northern Nigeria.",
    country: "India",
    countryLink: "/countries/india",
  },
  {
    id: 4,
    name: "Diego Rojas",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    badge: {
      flag: "/images/nigeria-flag.svg",
      text: "Colors of Kano",
    },
    description: "Amina is a photographer and cultural archivist based in northern Nigeria.",
    country: "Chile",
    countryLink: "/countries/chile",
  },
];

const TopContributors = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 relative overflow-hidden">
      {/* Background pattern image */}
      <div className="absolute inset-0 opacity-100">
        <Image
          src="/images/sectionBg.png"
          alt=""
          fill
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          <div>
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
              <h3 className="text-lg font-semibold text-[#8DC63F]">Top Contributors</h3>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Celebrating Our Contributors
              </h2>
              <div className="flex justify-start">
                <Image
                  src="/images/heading.png"
                  alt="Decorative line"
                  width={250}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <Link
            href="/get-involved"
            className="mt-6 md:mt-0 bg-[#8DC63F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#7AB62F] transition-all shadow-md whitespace-nowrap"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributors.map((contributor) => (
            <div
              key={contributor.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative w-full h-72">
                <Image
                  src={contributor.image}
                  alt={contributor.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name + Badge */}
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {contributor.name}
                  </h3>

                  <span className="bg-[#DC2626] text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                    {contributor.badge.text}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {contributor.description}
                </p>

                {/* Country + Arrow */}
                <div className="flex items-center gap-2">
                  <Link
                    href={contributor.countryLink}
                    className="text-blue-600 underline text-sm font-medium hover:text-blue-800"
                  >
                    {contributor.country}
                  </Link>

                  <div className="w-6 h-6 bg-[#8DC63F] rounded flex items-center justify-center flex-shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 11L11 1M11 1H1M11 1V11"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default TopContributors;