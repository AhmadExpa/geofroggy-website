import Image from "next/image";
import Link from "next/link";

interface Country {
  id: number;
  name: string;
  image: string;
  flag: string;
  description: string;
  link: string;
}

const countries: Country[] = [
  {
    id: 1,
    name: "Japan",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&h=400&fit=crop",
    flag: "/images/home/japan.png",
    description: "Stories, food traditions, and temple vlogs from Tokyo to Kyoto.",
    link: "/countries/japan",
  },
  {
    id: 2,
    name: "United States",
    image: "https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=600&h=400&fit=crop",
    flag: "/images/home/usa.png",
    description: "Stories, food traditions, and temple vlogs from Tokyo to Kyoto.",
    link: "/countries/usa",
  },
  {
    id: 3,
    name: "India",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop",
    flag: "/images/home/ind.png",
    description: "Festivals, family life, and ancient traditions across the subcontinent.",
    link: "/countries/india",
  },
  {
    id: 4,
    name: "Turkey",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&h=400&fit=crop",
    flag: "/images/home/turk.png",
    description: "Festivals, family life, and ancient traditions across the subcontinent.",
    link: "/countries/turkey",
  },
  {
    id: 5,
    name: "Canada",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=400&fit=crop",
    flag: "/images/home/canada.png",
    description: "Stories, food traditions, and temple vlogs from Tokyo to Kyoto.",
    link: "/countries/canada",
  },
  {
    id: 6,
    name: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop",
    flag: "/images/home/france.png",
    description: "Indigenous stories, multicultural cities, and peaceful wilderness.",
    link: "/countries/france",
  },
  {
    id: 7,
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
    flag: "/images/home/uk.png",
    description: "Stories, food traditions, and temple vlogs from Tokyo to Kyoto.",
    link: "/countries/uk",
  },
  {
    id: 8,
    name: "South Africa",
    image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=600&h=400&fit=crop",
    flag: "/images/home/sa.png",
    description: "Stories, food traditions, and temple vlogs from Tokyo to Kyoto.",
    link: "/countries/south-africa",
  },
];

const GlobalExplorer = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-100">
        <Image
          src="/images/sectionBg.png"
          alt=""
          fill
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="relative w-8 h-8">
              <Image
                src="/images/headIcon.png"
                alt=""
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#8DC63F]">Global Explorer</h3>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore the World by Country
          </h2>
          <div className="flex justify-center mb-6">
            <Image
              src="/images/heading.png"
              alt="Decorative line"
              width={250}
              height={20}
              className="object-contain"
            />
          </div>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Every country has its own heartbeat — a blend of people, culture, landscapes, and traditions. Dive into local stories, images, and lived experiences shared by real people from across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {countries.map((country) => (
            <Link
              key={country.id}
              href={country.link}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 relative">
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative w-6 h-4">
                    <Image
                      src={country.flag}
                      alt={`${country.name} flag`}
                      width={24}
                      height={16}
                      className="object-cover rounded-sm"
                    />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{country.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pr-8">
                  {country.description}
                </p>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-[#8DC63F] rounded flex items-center justify-center">
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
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/sign-up"
            className="bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white px-6 py-2 rounded-lg font-medium hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md"
          >
            Explore More COuntries
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GlobalExplorer;