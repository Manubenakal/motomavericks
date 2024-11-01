import Image from 'next/image';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-no-repeat bg-cover bg-center bg-[url('/images/coorg2.jpeg')] md:bg-[url('/images/chikmagaluru4.jpeg')] sm:bg-[url('/images/coorg2.jpeg')]">
      <Header />

      {/* Hero Section */}
      <div className='flex flex-col justify-end items-center h-full p-4 lg:p-10'>
        <div className='text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white uppercase text-center'>
          <h1 className='mb-1'>MOTOMAVERICKS</h1>
        </div>
        <p className='text-sm sm:text-md text-white bg-black/30 font-semibold mt-2 capitalize rounded-lg p-2'>
          SINCE 2023
        </p>
      </div>

      {/* Main Component Wrapper with Black Background */}
      <div className='bg-black'>
        <Main />
        <Footer />
      </div>
    </div>
  );
}
