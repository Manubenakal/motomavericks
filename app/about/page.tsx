import React from 'react';

const page = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
        <div className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            About Us
          </h2>
          <p className='mb-4'>
            Welcome to MotoMavericks, where the spirit of adventure meets the
            open road. We are a community of passionate riders united by our
            love for adventure bikes and the thrill of exploring the world on
            two wheels. Our club is all about freedom, camaraderie, and the
            pursuit of unforgettable journeys. MotoMavericks isn't just about
            riding—it's about the experiences we share, the friendships we form,
            and the places we discover together. Whether we're navigating rugged
            trails or cruising scenic highways, we embrace the unknown and
            celebrate the journey as much as the destination..
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-8'>
          <img
            className='w-full rounded-lg'
            src='https://media.licdn.com/dms/image/v2/D5603AQFLOnjH0nb7Ew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693127627041?e=1733356800&v=beta&t=QPwFo0MfCFNiBHfWgXnYCiDzONPPb84THK8VJ0PjIVs'
            alt='office content 1'
          />
          <img
            className='mt-4 w-full lg:mt-10 rounded-lg'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png'
            alt='office content 2'
          />
        </div>
      </div>
    </section>
  );
};

export default page;
