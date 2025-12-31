import Image from "next/image";

const CultureInbox = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT - Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
              src="/images/culture.png"
              alt="Global community"
              fill
              className="object-contain"
            />
          </div>

          {/* RIGHT - Newsletter Form */}
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image
                  src="/images/headIcon.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#8DC63F]">Copedia</h3>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Culture In Your Inbox
            </h2>

            <div className="flex justify-start mb-4 sm:mb-6">
              <Image
                src="/images/heading.png"
                alt="Decorative line"
                width={250}
                height={20}
                className="object-contain w-full max-w-[200px] sm:max-w-[250px]"
              />
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Get a fresh dose of global culture delivered straight to your inbox. From fun trivia and cultural traditions to inspiring stories and platform updates — Copedia keeps you connected to the heartbeat of the world.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Whether you're curious about world festivals, everyday life across continents, or just want a peek into the beauty of diversity, our newsletter brings it all to you in a bite-sized, meaningful way.
            </p>

            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email here"
                    className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8DC63F] focus:border-transparent text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-[#8DC63F] hover:bg-[#7AB62F] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap w-full sm:w-auto"
                  >
                    Notify
                  </button>
                </div>
              </div>
            </form>

            <p className="text-red-600 text-sm italic mt-4">
              "We respect your inbox — no spam, just great global content."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureInbox;