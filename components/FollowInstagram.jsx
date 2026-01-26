'use client';



const FollowInstagram = () => {
  const instagramLink = 'https://www.instagram.com/motomaveriicks?igsh=eTNuam84bXhzNDBz';

  return (
    <section className="w-full py-20 px-6 flex justify-center">
      <div className="max-w-5xl w-full rounded-2xl bg-black/40 backdrop-blur-md p-10 md:p-14 text-center">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Follow Us on Instagram
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ride highlights, event updates and pure MotoMavericks energy.
          Don&apos;t miss the action.
        </p>

        <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4   sm:px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]"
        >
          {/* Instagram Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.88a.88.88 0 1 1 0 1.76.88.88 0 0 1 0-1.76Z" />
          </svg>

          <span>Follow on Instagram</span>
        </a>
      </div>
    </section>
  );
};

export default FollowInstagram;
