// pages/blog/coorg.js
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Page = () => {
  return (
    <div>
      <Header />
      <div
        className='bg-cover bg-center min-h-screen text-white'
        style={{ backgroundImage: 'url(/images/coorg-background.jpg)' }}
      >
        <div className='max-w-5xl mx-auto p-6'>
          <h1 className='text-4xl font-bold mb-4 text-center md:text-left'>
            Exploring Coorg
          </h1>
          <p className='mb-6 text-center md:text-left'>
            Coorg, known as the Scotland of India, is famous for its lush green
            hills, coffee plantations, and beautiful landscapes. Our adventure
            began with a thrilling ride through the winding roads, leading us to
            breathtaking views at every turn. Riding through the dense forests,
            the aroma of coffee in the air, and the sound of nature created an
            unforgettable experience.
          </p>
          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Highlights
          </h2>
          <ul className='list-disc pl-5 mb-6'>
            <li>Visit to the Abbey Falls</li>
            <li>Exploring the coffee plantations</li>
            <li>Stunning views at Raja's Seat</li>
            <li>Delicious local cuisine</li>
          </ul>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Gallery
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
            {/* Placeholder for gallery images */}
            <img
              src='/images/kk3.jpeg'
              alt='Coorg Image 1'
              className='w-full h-auto rounded-lg'
            />
            <img
              src='/images/coorg2.jpeg'
              alt='Coorg Image 2'
              className='w-full h-auto rounded-lg'
            />
          </div>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Experience the Serenity
          </h2>
          <p className='mb-4 text-center md:text-left'>
            Riding through Coorg is a true adventure for motorcycle enthusiasts.
            The winding roads, framed by lush greenery, provide a perfect
            backdrop for an exhilarating ride. As we navigated through the
            hills, we encountered scenic viewpoints that offered panoramic
            vistas of coffee plantations and valleys. The cool breeze, the
            thrill of the ride, and the serenity of the surroundings made every
            moment memorable.
          </p>
          <p className='text-center md:text-left'>
            Stopping at various spots, we engaged with friendly locals, tasted
            delicious Coorgi cuisine, and learned about the rich culture of the
            region. Every corner of Coorg has a story to tell, making it a
            remarkable destination for bikers looking for both adventure and
            tranquility.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
