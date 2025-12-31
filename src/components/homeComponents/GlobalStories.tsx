"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Story {
  id: number;
  image: string;
  title: string;
  author: string;
  flag: string;
  timestamp?: string;
  isFeatured?: boolean;
}

const stories: Story[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop",
    title: "Sunrise Over the Serengeti",
    author: "Joseph Nyerere",
    flag: "/images/home/canada.png",
    timestamp: "3 hours ago",
    isFeatured: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    title: "Grandmother's Hands",
    author: "Priya Mehta",
    flag: "/images/home/uk.png",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    title: "Letters from Lapland",
    author: "Arto Järvinen",
    flag: "/images/home/sa.png",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop",
    title: "The Night We Danced In the Rain",
    author: "Isabela de Souza",
    flag: "/images/home/turk.png",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
    title: "Letters from Lapland",
    author: "Arto Järvinen",
    flag: "/images/home/ind.png",
  },
];

type TabType = "Stories" | "Images" | "Vlogs" | "Blogs";

const GlobalStories = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Stories");
  const featuredStory = stories.find((s) => s.isFeatured);
  const regularStories = stories.filter((s) => !s.isFeatured);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
          <div className="mb-6 md:mb-0">
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
              <h3 className="text-lg font-semibold text-[#8DC63F]">Global Stories</h3>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                The World Right Now
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

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setActiveTab("Stories")}
              className={`px-5 py-2.5 font-medium transition-colors flex items-center gap-2
  rounded-tr-[30px] rounded-bl-[30px]
  ${activeTab === "Stories"
                  ? "bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              <span className="text-lg">📖</span>
              Stories
            </button>
            <button
              onClick={() => setActiveTab("Images")}
              className={`px-5 py-2.5 font-medium transition-colors flex items-center gap-2
  rounded-tr-[30px] rounded-bl-[30px] ${activeTab === "Images"
                  ? "bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              <span className="text-lg">🖼️</span>
              Images
            </button>
            <button
              onClick={() => setActiveTab("Vlogs")}
              className={`px-5 py-2.5 font-medium transition-colors flex items-center gap-2
  rounded-tr-[30px] rounded-bl-[30px] ${activeTab === "Vlogs"
                  ? "bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              <span className="text-lg">🎥</span>
              Vlogs
            </button>
            <button
              onClick={() => setActiveTab("Blogs")}
              className={`px-5 py-2.5 font-medium transition-colors flex items-center gap-2
  rounded-tr-[30px] rounded-bl-[30px] ${activeTab === "Blogs"
                  ? "bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              <span className="text-lg">✍️</span>
              Blogs
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Story - Left side, full height */}
          {featuredStory && (
            <Link
              href={`/stories/${featuredStory.id}`}
              className="block relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative w-full h-full min-h-[500px]">
                <Image
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    {featuredStory.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="relative w-6 h-5">
                      <Image
                        src={featuredStory.flag}
                        alt="Flag"
                        width={24}
                        height={20}
                        className="object-cover rounded-sm"
                      />
                    </div>
                    <span className="text-white text-sm">By: {featuredStory.author}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    {featuredStory.timestamp && (
                      <div className="flex items-center gap-2 text-white text-sm">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>{featuredStory.timestamp}</span>
                      </div>
                    )}

                    <button className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-5 py-2 rounded-lg font-medium transition-colors">
                      Read Full Story
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Regular Stories Grid - Right side, 2x2 */}
          <div className="grid grid-cols-2 gap-4">
            {regularStories.slice(0, 4).map((story) => (
              <Link
                key={story.id}
                href={`/stories/${story.id}`}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-60">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0  from-black/90 via-black/40 to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold text-base mb-2 line-clamp-2">
                      {story.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <div className="relative w-5 h-4">
                        <Image
                          src={story.flag}
                          alt="Flag"
                          width={20}
                          height={16}
                          className="object-cover rounded-sm"
                        />
                      </div>
                      <span className="text-white text-xs">By: {story.author}</span>
                    </div>
                  </div>

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
        </div>
      </div>
    </section>
  );
};

export default GlobalStories;