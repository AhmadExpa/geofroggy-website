import Image from 'next/image';

const InsideGeofroggy = () => {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-100">
        <Image
          src="/images/sectionBg.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
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
            <h3 className="text-3xl font-semibold text-[#8DC63F]">Inside GeoFroggy</h3>
          </div>

          <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-4">
            What's Buzzing on GeoFroggy
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

          <p className="text-gray-600 text-sm max-w-3xl mx-auto leading-relaxed">
            Discover trending cultural moments, viral stories, and community reactions that are lighting up the Geofroggy platform right now. From global traditions going viral to unexpected conversations sparked by contributors.
          </p>
        </div>

        {/* Top Featured Section */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          {/* Most Viewed Story */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row">
            <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
              <Image
                src="/images/news/n5.png"
                alt="Street Art as Resistance in Myanmar"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 flex-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">🔥</span>
                <h2 className="text-xl font-medium text-[#383838]">
                  Most Viewed Story This Week
                </h2>
              </div>
              <h4 className="text-base font-semibold text-[#383838] mb-2">
                Title: Street Art as Resistance in Myanmar
              </h4>
              <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                A contributor's photo essay from Yangon has become the most-read story of the week — sparking discussions on youth culture, freedom, and creative protest.
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  👁️ 12,400 views
                </span>
                <span className="flex items-center gap-1">
                  💬 139 comments
                </span>
              </div>
            </div>
          </div>

          {/* Global Top Tag */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row">
            <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
              <Image
                src="/images/news/n6.png"
                alt="Migration Diaries"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🔥</span>
                <h2 className="text-xl font-medium text-[#383838]">
                  Global Top Tag:
                </h2>
              </div>
              <h4 className="text-xl  text-[#383838] font-bold mb-4">
                #MigrationDiaries
              </h4>
              <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                The tag #MigrationDiaries is trending globally as users share family migration stories from Iran, Colombia, and Sudan.
              </p>
              <div className=" border-[#8DC63F]  rounded">
                <p className="text-xs font-semibold text-[#8DC63F] mb-2">
                  Highlight Quote:
                </p>
                <p className="text-xs text-gray-700 italic">
                  "My grandfather left maps under the lining of his coat. This is how we arrived."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="grid sm:grid-cols-3 gap-5">
          {/* Comment of the Week */}
          <div className="bg-white rounded-xl shadow-md p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">💬</span>
              <h2 className="text-xl font-medium text-[#454545]">
                Comment of the Week
              </h2>
            </div>
            <p className="text-md text-[#8DC63F] font-medium mb-2">
              Comment:
            </p>
            <p className="text-xs text-[#454545] italic mb-2 leading-relaxed">
              "I didn't even know this festival existed. It made me proud of my roots again."
            </p>
            <p className="text-xs text-[#454545] mb-3">
              - A reader from Morocco
            </p>
            <p className="text-md text-[#8DC63F] font-medium mb-1">
              Story Referenced:
            </p>
            <p className="text-xs text-[#454545] italic">
              "The Forgotten Fire Rituals of North Africa"
            </p>
          </div>

          {/* Fastest Growing Country Hub */}
          <div className="bg-white rounded-xl shadow-md p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">📊</span>
              <h2 className="text-xl font-medium text-[#383838]">
                Fastest Growing Country Hub
              </h2>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🇺🇸</span>
              <h4 className="text-lg font-bold text-[#454545]">
                United State
              </h4>
            </div>
            <p className="text-md text-[#8DC63F] font-medium mb-1">
              Growth Stats:
            </p>
            <p className="text-base font-bold text-[#2480BD] mb-2">
              +380% <span className="text-xs font-normal text-[#454545]">story submissions in the past 30 days</span>
            </p>
            <p className="text-xs text-[#454545] leading-relaxed">
              Thanks to new contributors and local outreach, the United State Hub has become one of the fastest-growing on the platform.
            </p>
          </div>

          {/* Most Shared Moment */}
          <div className="bg-white rounded-xl shadow-md p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🎉</span>
              <h2 className="text-xl font-medium text-[#383838]">
                Most Shared Moment
              </h2>
            </div>
            <p className="text-md text-[#8DC63F] font-medium mb-1">
              Story Title:
            </p>
            <p className="text-sm text-[#383838] font-semibold mb-2 italic">
              "Tiny Village in Iceland Revives its Mythical Frog Festival"
            </p>
            <p className="text-md text-[#8DC63F] font-medium mb-1">
              Sharing:
            </p>
            <p className="text-sm text-[#383838] mb-2">
              🟢 2,100+ shares in 48 hours
            </p>
            <p className="text-xs text-[#383838] leading-relaxed">
              A quirky, beautiful piece that brought people together across generations — and continents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsideGeofroggy;