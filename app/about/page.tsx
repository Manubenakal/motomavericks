import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

const AboutPage = () => {
  return (
    <section className='bg-white dark:bg-gray-900 h-full'>
      <Header />
      <div className='flex flex-col items-center py-12 px-4 mx-auto mt-10 max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 gap-16'>
        {/* Text Section */}
        <div className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
          <h2 className='mb-6 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            About Us
          </h2>
          <p className='mb-4 text-lg leading-relaxed'>
            Welcome to{' '}
            <span className='font-semibold text-blue-600'>MotoMavericks</span>,
            where the spirit of adventure meets the open road. We are a
            community of passionate riders united by our love for adventure
            bikes and the thrill of exploring the world on two wheels. Our club
            is all about freedom, camaraderie, and the pursuit of unforgettable
            journeys.
          </p>
          <p className='mb-4 text-lg leading-relaxed'>
            MotoMavericks isn't just about riding—it's about the experiences we
            share, the friendships we form, and the places we discover together.
            Whether we're navigating rugged trails or cruising scenic highways,
            we embrace the unknown and celebrate the journey as much as the
            destination.
          </p>
          <p className='text-lg leading-relaxed'>
            We are strategists, designers, and developers. Innovators and
            problem solvers. Small enough to be simple and quick.
          </p>
        </div>

        {/* Image Section */}
        <div className='grid grid-cols-2 gap-4 mt-8 w-full'>
          <div className='overflow-hidden transition-transform transform hover:scale-105 duration-300'>
            <img
              className='w-full h-48 md:h-64 object-cover rounded-lg shadow-lg'
              src='https://media.licdn.com/dms/image/v2/D5603AQFLOnjH0nb7Ew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693127627041?e=1733356800&v=beta&t=QPwFo0MfCFNiBHfWgXnYCiDzONPPb84THK8VJ0PjIVs'
              alt='MotoMavericks Community'
            />
          </div>
          <div className='overflow-hidden transition-transform transform hover:scale-105 duration-300'>
            <img
              className='w-full h-48 md:h-64 object-cover rounded-lg shadow-lg'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png'
              alt='MotoMavericks Activities'
            />
          </div>
          <div className='overflow-hidden transition-transform transform hover:scale-105 duration-300'>
            <img
              className='w-full h-48 md:h-64 object-cover rounded-lg shadow-lg'
              src='https://images.pexels.com/photos/1618896/pexels-photo-1618896.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Scenic Ride 1'
            />
          </div>
          <div className='overflow-hidden transition-transform transform hover:scale-105 duration-300'>
            <img
              className='w-full h-48 md:h-64 object-cover rounded-lg shadow-lg'
              src='https://images.pexels.com/photos/2105853/pexels-photo-2105853.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Scenic Ride 2'
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default AboutPage;
