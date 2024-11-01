// pages/blog/wayanad-ooty.js
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Page = () => {
  return (
    <div>
      <Header />
      <div
        className='bg-cover bg-center min-h-screen text-white '
        style={{ backgroundImage: 'url(/images/ooty1.jpeg)' }} // Use a relevant background image for Wayanad
      >
        <div className='max-w-5xl mx-auto p-6'>
          <h1 className='text-4xl font-bold mb-4 mt-14 text-center md:text-left'>
            Discovering Wayanad & Ooty
          </h1>
          <p className='mb-6 text-center md:text-left'>
            Nestled in the Western Ghats, Wayanad is a haven for nature lovers
            and adventure seekers alike. With its mist-covered hills, tranquil
            lakes, and sprawling tea gardens, Wayanad offers a perfect blend of
            natural beauty and rich cultural heritage. Our journey through
            Wayanad to Ooty was an unforgettable experience, marked by scenic
            rides and breathtaking landscapes.
          </p>
          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Highlights
          </h2>
          <ul className='list-disc pl-5 mb-6'>
            <li>Visit to Edakkal Caves</li>
            <li>Exploring Banasura Sagar Dam</li>
            <li>Stunning views at Wayanad’s waterfalls</li>
            <li>Tea plantation tours in Ooty</li>
          </ul>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Gallery
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
            {/* Placeholder for gallery images */}
            <img
              src='/images/wo1.jpeg'
              alt='Wayanad Image 1'
              className='w-full h-auto rounded-lg'
            />
            <img
              src='/images/wo2.jpeg'
              alt='Wayanad Image 2'
              className='w-full h-auto rounded-lg'
            />
          </div>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            The Journey Through Wayanad
          </h2>
          <p className='mb-4 text-center md:text-left'>
            Our ride through Wayanad was nothing short of spectacular. The
            winding roads meander through lush forests and tea gardens, offering
            picturesque views at every turn. We made stops at various
            viewpoints, taking in the breathtaking scenery and capturing the
            moment in photos.
          </p>
          <p className='text-center md:text-left'>
            One of the highlights was the visit to Edakkal Caves, where ancient
            petroglyphs tell the stories of the region's past. We also explored
            the Banasura Sagar Dam, the largest earthen dam in India, where the
            serene environment and stunning landscapes provided a perfect
            backdrop for relaxation.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            The Charm of Ooty
          </h2>
          <p className='mb-4 text-center md:text-left'>
            As we continued our journey to Ooty, the charming hill station
            welcomed us with its cool climate and vibrant gardens. The famous
            Botanical Gardens and Ooty Lake were perfect spots to unwind and
            soak in the tranquility. A ride on the Nilgiri Mountain Railway, a
            UNESCO World Heritage Site, added a unique experience to our trip.
          </p>
          <p className='text-center md:text-left'>
            The local cuisine in Ooty, especially the delectable homemade
            chocolates and fresh produce, was a treat for our taste buds. We
            enjoyed the evening strolls along the lake, where the reflection of
            the surrounding hills added to the charm of this beautiful hill
            station.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
