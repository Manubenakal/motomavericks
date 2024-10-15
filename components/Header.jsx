'use client';
import React from 'react';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);

  return (
    <header className='fixed top-0 w-full clearNav z-50 bg-gray-800'>
      <div className='max-w-5xl mx-auto flex flex-wrap p-4'>
        {/* Logo and menu toggle button */}
        <div className='flex justify-between items-center w-full'>
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

        {/* Navigation items */}
        <div
          className={`${
            navbarOpen ? 'flex' : 'hidden'
          } md:flex flex-grow items-center justify-between w-full mt-2`}
        >
          <div className='font-4 pt-1 md:pl-14 pl-1 flex flex-col md:flex-row items-center md:text-base text-1xl'>
            <a className='mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04'>
              Features
            </a>

            {/* Dropdown for 'Places we've been to' */}
            <div className='relative'>
              <button
                type='button'
                className='group rounded-md text-gray-300 inline-flex items-center text-base font-bold focus:outline-none'
                onMouseEnter={() => setFlyer(!flyer)}
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

              {/* Dropdown menu with improved styling */}
              {flyer && (
                <div
                  onMouseLeave={() => setFlyer(false)}
                  className='absolute z-10 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg'
                >
                  <div className='p-3'>
                    <a
                      href='/coorg'
                      className='block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded transition duration-200'
                    >
                      Coorg
                    </a>
                    <a
                      href='/wayanad-ooty'
                      className='block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded transition duration-200'
                    >
                      Wayanad-Ooty
                    </a>
                    <a
                      href='/kodaikanal-munnar'
                      className='block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded transition duration-200'
                    >
                      Kodaikanal-Munnar
                    </a>
                    <a
                      href='/chikmagaluru'
                      className='block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded transition duration-200'
                    >
                      Chikmagaluru
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href='/about'
              className='mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04'
            >
              About Us
            </a>
          </div>

          {/* Instagram Icon */}
          <div className='flex items-center space-x-4 mt-4 md:mt-0'>
            <a
              href='https://instagram.com/motomaveriicks'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block'
            >
              <svg
                width='24'
                height='24'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='white'
              >
                <path d='M12 2.2c3.2 0 3.6 0 4.9.1 1.3.1 2.1.3 2.6.5.7.3 1.2.7 1.7 1.2.5.5.9 1 1.2 1.7.3.5.5 1.3.5 2.6.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.3-.3 2.1-.5 2.6-.3.7-.7 1.2-1.2 1.7-.5.5-1 1-1.7 1.2-.5.3-1.3.5-2.6.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.3-.1-2.1-.3-2.6-.5-.7-.3-1.2-.7-1.7-1.2-.5-.5-1-1-1.2-1.7-.3-.5-.5-1.3-.5-2.6-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.3.3-2.1.5-2.6.3-.7.7-1.2 1.2-1.7.5-.5 1-1 1.7-1.2.5-.3 1.3-.5 2.6-.5C8.4 2.2 8.8 2.2 12 2.2M12 0C8.7 0 8.3 0 7 .1 5.7.1 4.6.3 3.8.7c-.8.4-1.5.8-2.2 1.5C.9 3.9.5 4.6.1 5.4c-.4.8-.6 1.9-.7 3.2C-.1 9.7-.1 10.1-.1 13.4c0 3.3 0 3.7.1 5 .1 1.3.3 2.4.7 3.2.4.8.8 1.5 1.5 2.2.7.7 1.4 1.1 2.2 1.5.8.4 1.9.6 3.2.7 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.4-.3 3.2-.7.8-.4 1.5-.8 2.2-1.5.7-.7 1.1-1.4 1.5-2.2.4-.8.6-1.9.7-3.2.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.4-.7-3.2-.4-.8-.8-1.5-1.5-2.2-.7-.7-1.4-1.1-2.2-1.5-.8-.4-1.9-.6-3.2-.7C15.7.1 15.3 0 12 0m0 5.8c-3.5 0-6.4 2.9-6.4 6.4s2.9 6.4 6.4 6.4 6.4-2.9 6.4-6.4-2.9-6.4-6.4-6.4m0 10c-2 0-3.6-1.6-3.6-3.6 0-2 1.6-3.6 3.6-3.6 2 0 3.6 1.6 3.6 3.6 0 2-1.6 3.6-3.6 3.6m4.9-10.4c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6z' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
