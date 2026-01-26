const Footer = () => {
  const instagramLink = 'https://www.instagram.com/YOUR_INSTAGRAM_HANDLE';

  return (
    <footer className="p-6 bg-black md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        
        <a
          href="/"
          className="flex justify-center items-center text-3xl font-semibold text-white mb-4"
        >
          <img
            src="/images/moto-logo.png"
            alt="MotoMavericks Logo"
            className="mr-2 h-10 rounded-full"
          />
          MOTOMAVERICKS
        </a>

        <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
          <li className="mr-6">
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li className="mr-6">
            <a href="#" className="hover:underline">
              Places we went
            </a>
          </li>
          <li className="mr-6">
            <a href="#" className="hover:underline">
              Gallery
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center mb-6">
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MotoMavericks Instagram"
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.88a.88.88 0 1 1 0 1.76.88.88 0 0 1 0-1.76Z" />
            </svg>
          </a>
        </div>

        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} MotoMavericks.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
