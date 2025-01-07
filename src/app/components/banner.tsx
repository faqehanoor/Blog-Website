import React from 'react';

export const Banner = () => {
  return (
    <section className="font-bold text-white body-font bg-gradient-to-r from-pink-500 to-purple-500">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl font-extrabold text-2xl title-font mb-2 text-white">
            Welcome To My Blog
          </h1>
          <p className="lg:w-1/2 w-full font-bold text-2xl leading-relaxed text-white">
            Explore the various forms of flowing water: Rapids, Torrent, Cascade, Stream, Fall, and Cascading.
          </p>
        </div>
        <div className="flex flex-wrap justify-center text-center text-bold text-white -m-4">
          {[
            { term: 'Rapids', description: 'Rapids are fast-flowing sections of a river, often marked by turbulent water and waves.' },
            { term: 'Torrent', description: 'A torrent is a strong, fast-moving stream of water, often caused by heavy rainfall or flooding.' },
            { term: 'Cascade', description: 'A cascade is a small waterfall, often one of many, flowing down a series of rocks or ledges.' },
            { term: 'Stream', description: 'A stream is a continuous flow of water, typically smaller than a river and can be found in various environments.' },
            { term: 'Fall', description: 'A fall is a waterfall where water drops vertically over a cliff or ledge, creating a dramatic display.' },
            { term: 'Cascading', description: 'Cascading refers to water flowing in a series of waterfalls or small drops, creating a scenic, stepped appearance.' },
          ].map((item, index) => (
            <div key={index} className="xl:w-1/3 md:w-1/2 sm:w-full p-4">
              <div className="border border-gray-100 p-6 rounded-lg bg-white">
                <div className="w-10 h-10 inline-flex items-center justify-center font-bold text-white rounded-full bg-indigo-100 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label={item.term} // Added aria-label for accessibility
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-bold title-font mb-2">{item.term}</h2>
                <p className="text-gray-900 text-base">{item.description}</p> {/* Changed to text-gray-900 for readability */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
