'use client';
import React from 'react';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const instagramLink = 'https://www.instagram.com/motomaveriicks?igsh=eTNuam84bXhzNDBz';

  return (
    <header className='fixed top-0 w-full clearNav z-50 bg-gray-800'>
      <div className='max-w-5xl mx-auto flex flex-wrap items-center justify-between p-4'>
        {/* Logo and menu toggle button */}
        <div className='flex items-center justify-between w-full md:w-auto'>
          <a href='/' className='flex items-center'>
            <img
              src='/images/moto-logo.png'
              alt='MotoMavericks Logo'
              className='w-10 h-10 rounded-full mr-2'
            />
            <span className='text-2xl md:text-3xl text-white font-serif font-extrabold uppercase'>
              MOTOMAVERICKS
            </span>
          </a>
          <button
            className='text-white md:hidden'
            type='button'
            aria-label='Toggle menu'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-menu'
            >
              <line x1='3' y1='12' x2='21' y2='12'></line>
              <line x1='3' y1='6' x2='21' y2='6'></line>
              <line x1='3' y1='18' x2='21' y2='18'></line>
            </svg>
          </button>
        </div>

        {/* Background overlay for mobile */}
        {navbarOpen && (
          <div
            className='fixed inset-0 bg-black opacity-50 z-40 md:hidden'
            onClick={() => setNavbarOpen(false)}
          ></div>
        )}

        {/* Navigation items */}
        <div
          className={`${
            navbarOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-center justify-between w-full md:w-auto mt-2 md:mt-0 absolute md:static top-16 left-0 bg-gray-800 md:bg-transparent p-5 md:p-0 z-50 rounded-md md:rounded-none shadow-lg md:shadow-none`}
        >
          <div className='font-4 flex flex-col md:flex-row items-center text-1xl md:space-x-8'>
            <a
              className='cursor-pointer text-gray-300 hover:text-white font-semibold tr04 py-2 md:py-0'
              onClick={() => setNavbarOpen(false)}
            >
              Gallery
            </a>

            {/* Dropdown for 'Places we've been to' */}
            <div className='relative'>
              <button
                type='button'
                className='group rounded-md text-gray-300 inline-flex items-center text-base font-bold focus:outline-none'
                onClick={() => setFlyer(!flyer)}
              >
                <span className='tr04'>Places we've been to</span>
                <svg
                  className={`${
                    flyer ? 'transform rotate-180' : ''
                  } ml-2 h-5 w-5 transition-transform duration-200`}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              {flyer && (
                <div
                  className='absolute z-10 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg'
                  onMouseLeave={() => setFlyer(false)}
                >
                  <div className='p-3'>
                    <a
                      href='/coorg'
                      className='block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded transition duration-200'
                      onClick={() => setNavbarOpen(false)}
                    >
                      Coorg
                    </a>
                    <a
                      href='/wayanad-ooty'
                      className='block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded transition duration-200'
                      onClick={() => setNavbarOpen(false)}
                    >
                      Wayanad-Ooty
                    </a>
                    <a
                      href='/kodaikanal-munnar'
                      className='block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded transition duration-200'
                      onClick={() => setNavbarOpen(false)}
                    >
                      Kodaikanal-Munnar
                    </a>
                    <a
                      href='/chikmagaluru'
                      className='block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded transition duration-200'
                      onClick={() => setNavbarOpen(false)}
                    >
                      Chikmagaluru
                    </a>{' '}
                    <a
                      href='/sikkim'
                      className='block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded transition duration-200'
                      onClick={() => setNavbarOpen(false)}
                    >
                      Sikkim
                    </a>{' '}
                    <a
                      href='/coastal-ride'
                      className='block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded transition duration-200'
                      onClick={() => setNavbarOpen(false)}
                    >
                      Coastal Ride
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href='/about'
              className='cursor-pointer text-gray-300 hover:text-white font-semibold tr04 py-2 md:py-0'
              onClick={() => setNavbarOpen(false)}
            >
              About Us
            </a>
            <a
  href={instagramLink}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="MotoMavericks Instagram"
  className="text-gray-300 hover:text-pink-500 transition-colors duration-300 py-2 md:py-0"
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
        </div>
      </div>
    </header>
  );
}
