import Link from 'next/link';
import PhotoCarousel from '../components/PhotoCarousel';
import JoinClub from './JoinClub';
import FollowInstagram from './FollowInstagram';
import RidesGrid from './RidesGrid';
export default function Main() {
  return (
    <section className='text-black body-font'>
      <div className='max-w-5xl pt-24 pb-24 mx-auto'>
        <h1 className='text-4xl md:text-6xl px-2 lg:text-7xl text-center font-bold text-white mb-6'>
          A Riding Club Started with Passion
        </h1>
        <h2 className='text-xl md:text-2xl font-semibold pb-11 text-gray-700 text-center'>
          Since 2023
        </h2>
      </div>

      <div className='container flex flex-col items-center justify-center mx-auto p-5'>
        <img
          className='object-cover object-center w-full md:w-3/4 mb-10 border   shadow-md rounded-3xl'
          alt='Placeholder Image'
          src='/images/main1.jpeg'
        />
      </div>

      <h2 className='pt-20 md:pt-40 mb-4 text-3xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-center text-gray-200'>
        Places We've Been To!
      </h2>
      <p className='mx-auto text-base md:text-xl text-center text-gray-300 font-normal leading-relaxed lg:w-2/3'>
        These are the thrilling bike trips MotoMavericks has embarked on,
        exploring the most scenic and challenging routes across South India.
      </p>


      
      <RidesGrid />
      
        <JoinClub />
        <FollowInstagram />
      

      <div className='pt-32 pb-32 max-w-6xl mx-auto p-5'>
        <PhotoCarousel />
      </div>
    </section>
  );
}
