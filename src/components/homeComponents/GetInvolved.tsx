import Image from "next/image";
import Link from "next/link";

interface ActionCard {
  id: number;
  icon: string;
  title: string;
  description: string;
  link: string;
}

const actionCards: ActionCard[] = [
  {
    id: 1,
    icon: "/images/icon.png",
    title: "Submit Story",
    description: "Share a personal memory or cultural insight that brings your corner of the world to life.",
    link: "/submit-story",
  },
  {
    id: 2,
    icon: "/images/icon.png",
    title: "Become Ambassador",
    description: "Help represent your region, welcome new voices, and grow our global community.",
    link: "/become-ambassador",
  },
  {
    id: 3,
    icon: "/images/icon.png",
    title: "Volunteer or Partner",
    description: "Use your skills or collaborate with us to power outreach, content, or events.",
    link: "/volunteer",
  },
  {
    id: 4,
    icon: "/images/icon.png",
    title: "Donate",
    description: "Use your skills or collaborate with us to power outreach, content, or events.",
    link: "/donate",
  },
];

const GetInvolved = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-100">
        <Image
          src="/images/sectionBg.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 lg:mb-32">
          {/* LEFT CONTENT */}
          <div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get Involved with Geofroggy
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

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              At Geofroggy, we believe that the stories of the world are best told by the people who live them. That's why we invite you to be more than just a reader — become a contributor, a connector, and a catalyst for global understanding.
            </p>

            <p className="text-gray-700 text-sm mb-4">
              There are many ways to get involved:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8DC63F] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6 L5 9 L10 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">
                  Whether you have a powerful story from your village or a quiet reflection from your city...
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8DC63F] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6 L5 9 L10 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">
                  Whether you want to uplift unheard voices or bring your community closer to the world...
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-full">
            {/* Left green stripe */}
            <div className="absolute left-0 lg:left-[-4] rounded-tl-[20px] h-90 bottom-0 w-3 bg-[#8DC63F] z-10"></div>

            {/* Main image */}
            <div className="relative ml-0 lg:ml-3 mr-0 lg:mr-8 rounded-2xl overflow-hidden min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=1000&fit=crop"
                alt="People celebrating together"
                fill
                className="object-cover"
              />
            </div>

            {/* Right navy stripe */}
            <div className="absolute right-0 lg:right-[0] rounded-bl-[20px] h-90 top-0 bottom-0 w-4 bg-[#1e3a5f] z-10"></div>
          </div>
        </div>

        {/* CARDS ROW AT BOTTOM - OVERLAPPING THE IMAGE */}
        <div className="relative -mt-20 sm:-mt-32 lg:-mt-60 z-20 mr-0 lg:mr-[200px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {actionCards.map((card) => (
              <Link
                key={card.id}
                href={card.link}
                className="bg-white rounded-xl px-4 py-8 shadow-lg "
              >
                <div className="relative w-32 h-32 mx-auto mb-3">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-md leading-relaxed text-center">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;