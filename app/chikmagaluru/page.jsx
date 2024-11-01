// pages/blog/chikmagaluru.js
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Page = () => {
  return (
    <div>
      <Header />
      <div
        className='bg-cover bg-center min-h-screen text-white'
        style={{ backgroundImage: 'url(/images/chikmagaluru4.jpeg)' }} // Use a relevant background image for Chikmagaluru
      >
        <div className='max-w-5xl mx-auto p-6'>
          <h1 className='text-4xl font-bold mb-4 text-center mt-14 md:text-left'>
            Exploring Chikmagaluru
          </h1>
          <p className='mb-6 text-center md:text-left'>
            Our journey to Chikmagaluru was an exhilarating adventure filled
            with breathtaking landscapes, thrilling off-roading, and unexpected
            challenges. Known for its coffee plantations and scenic hills,
            Chikmagaluru provided the perfect backdrop for our motorcycle
            expedition.
          </p>
          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Highlights
          </h2>
          <ul className='list-disc pl-5 mb-6'>
            <li>Conquering Mullayanagiri Peak</li>
            <li>Exploring the nearby lake</li>
            <li>Thrilling off-road adventures</li>
            <li>Journey through Charmadi Ghat to Dharmasthala</li>
          </ul>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Gallery
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6'>
            <img
              src='/images/chikmagaluru1.jpeg'
              alt='Chikmagaluru Image 1'
              className='w-full h-64 object-cover rounded-lg'
            />
            <img
              src='/images/chikmagaluru2.jpeg'
              alt='Chikmagaluru Image 2'
              className='w-full h-64 object-cover rounded-lg'
            />
            <img
              src='/images/chikmagaluru3.jpeg'
              alt='Chikmagaluru Image 3'
              className='w-full h-64 object-cover rounded-lg'
            />
            <img
              src='/images/chikmagaluru4.jpeg'
              alt='Chikmagaluru Image 4'
              className='w-full h-64 object-cover rounded-lg'
            />
            <img
              src='/images/chikmagaluru5.jpeg'
              alt='Chikmagaluru Image 5'
              className='w-full h-64 object-cover rounded-lg'
            />
          </div>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            The Ascent to Mullayanagiri
          </h2>
          <p className='mb-4 text-center md:text-left'>
            Our adventure began with the thrilling ascent to Mullayanagiri Peak,
            the highest peak in Karnataka. Riding through the winding roads, we
            encountered stunning views and lush greenery at every turn. The road
            was a mix of smooth stretches and challenging terrains, making it an
            exciting ride for our group.
          </p>
          <p className='text-center md:text-left'>
            Once at the top, we were rewarded with breathtaking panoramic views
            of the surrounding hills and valleys. It was a moment of triumph for
            all of us as we took in the beauty of the landscape from such a
            magnificent height.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Off-Roading and Exploring the Lake
          </h2>
          <p className='mb-4 text-center md:text-left'>
            After conquering the peak, we embarked on an off-roading adventure
            to explore the nearby lake. The thrill of riding on uneven paths
            surrounded by dense forests and coffee plantations added an element
            of excitement to our journey. The lake, with its serene waters,
            provided the perfect spot for relaxation and reflection after a
            challenging ride.
          </p>
          <p className='text-center md:text-left'>
            We captured memorable moments as we relaxed by the lakeside, sharing
            stories and enjoying the natural beauty around us. It was a perfect
            blend of adventure and tranquility.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            The Journey Through Charmadi Ghat
          </h2>
          <p className='mb-4 text-center md:text-left'>
            On our way back, we took the scenic route through Charmadi Ghat,
            known for its winding roads and breathtaking vistas. The journey was
            both exhilarating and challenging, especially as we encountered
            unexpected tire punctures along the way. It tested our skills and
            camaraderie as we worked together to fix the punctures and continue
            our adventure.
          </p>
          <p className='text-center md:text-left'>
            Despite the challenges, the journey through Charmadi Ghat was filled
            with beautiful landscapes, lush greenery, and unforgettable moments,
            making it a highlight of our trip.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
