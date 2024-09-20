import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center bg-[url('https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/himalayan/gallery/webp/thumbnail/gallery-2.webp')]">
      <header className='lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-sm'>
        <div className='flex-1 flex justify-between items-center mix-blend-screen'>
          <a href='#' className='text-4xl text-gray-400 font-extrabold'>
            MOTOMAVERICKS
          </a>
        </div>

        <label htmlFor='menu-toggle' className='pointer-cursor md:hidden block'>
          <svg
            className='fill-current text-gray-600'
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
          >
            <title>menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
          </svg>
        </label>
        <input className='hidden' type='checkbox' id='menu-toggle' />

        <div
          className='hidden md:flex md:items-center md:w-auto w-full'
          id='menu'
        >
          <nav>
            <ul className='md:flex items-center justify-between text-base text-white pt-4 md:pt-0'>
              <li>
                <a className='md:p-4 py-3 px-0 block' href='#'>
                  Home
                </a>
              </li>
              <li>
                <a className='md:p-4 py-3 px-0 block' href='#'>
                  Services
                </a>
              </li>
              <li>
                <a className='md:p-4 py-3 px-0 block' href='#'>
                  About Us
                </a>
              </li>
              <li>
                <a className='md:p-4 py-3 px-0 block md:mb-0 mb-2' href='#'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className='w-[90%] mx-auto h-full flex items-center justify-between py-10'>
        <div className='lg:w-fit'>
          <div className='sm:text-6xl xs:text-5xl text-left text-white font-serif font-extrabold uppercase'>
            <h1></h1>
            <h1>MOTO</h1>
            <h1 className='bg-black/30 text-white rounded-sm px-1 shadow-sm shadow-white/50'>
              MAVERICKS
            </h1>
          </div>

          <p className='text-md text-white bg-black/30 font-semibold mt-1 capitalize rounded-lg p-2'>
            SINCE 2023
          </p>
        </div>

        <div>
          <ul className='text-3xl text-white'>
            <li className='flex justify-center items-center p-1 bg-black/40 rounded-full'>
              {/* <ion-icon name="logo-facebook"></ion-icon> */}
            </li>
            <li className='flex justify-center items-center p-1 bg-black/40 rounded-full mt-2'>
              {/* <ion-icon name="logo-instagram"></ion-icon> */}
            </li>
            <li className='flex justify-center items-center p-1 bg-black/40 rounded-full mt-2'>
              {/* <ion-icon name="logo-whatsapp"></ion-icon>
                  </ion-icon> */}
            </li>
            <li className='flex justify-center items-center p-1 bg-black/40 rounded-full mt-2'>
              {/* <ion-icon name="person-circle-outline"></ion-icon> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
{
  /* <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script> */
}
