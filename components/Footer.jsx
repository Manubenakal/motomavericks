const Footer = () => {
  return (
    <footer className='p-6 bg-black md:p-8 lg:p-10'>
      <div className='mx-auto max-w-screen-xl text-center'>
        <a
          href='#'
          className='flex justify-center items-center text-3xl font-semibold text-white mb-4'
        >
          <img
            src='/images/moto-logo.png'
            alt='MotoMavericks Logo'
            className='mr-2 h-10 rounded-full' // Increased logo height for better visibility
          />
          MOTOMAVERICKS
        </a>

        <ul className='flex flex-wrap justify-center items-center mb-6 text-white'>
          <li className='mr-6'>
            <a href='/about' className='hover:underline'>
              About
            </a>
          </li>
          <li className='mr-6'>
            <a href='#' className='hover:underline'>
              Places we went
            </a>
          </li>
          <li className='mr-6'>
            <a href='#' className='hover:underline'>
              Gallery
            </a>
          </li>
        </ul>

        <div className='text-sm text-gray-400'>
          &copy; {new Date().getFullYear()} MotoMavericks.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
