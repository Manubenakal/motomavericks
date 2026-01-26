'use client';

import React from 'react';

const JoinClub = () => {
  const whatsappGroupLink =
    'https://chat.whatsapp.com/DmJAo4jeJfjERaOJ91E7TO?mode=gi_t';

  return (
    <section className="w-full py-20 px-6 flex justify-center">
      <div className="max-w-5xl w-full rounded-2xl  bg-black/40 backdrop-blur-md p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Join the MotoMavericks
          </h2>
          <p className="text-gray-300 max-w-xl leading-relaxed">
            Ride with passionate bikers, stay updated on one day rides, We actively conduct one day rides.
            Be part of the Maverick brotherhood.
          </p>
        </div>

        {/* CTA */}
        <a
          href={whatsappGroupLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]"
        >
          <span className="relative z-10">Join WhatsApp Group</span>
          <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0" />
        </a>
      </div>
    </section>
  );
};

export default JoinClub;
