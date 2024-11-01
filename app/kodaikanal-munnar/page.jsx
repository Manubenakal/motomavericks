// pages/blog/kodaikanal-munnar.js
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Page = () => {
  return (
    <div>
      <Header />
      <div
        className='bg-cover bg-center min-h-screen text-white'
        style={{ backgroundImage: 'url(/images/kk-hero.jpeg)' }} // Use a relevant background image for Kodaikanal
      >
        <div className='max-w-5xl mx-auto p-6'>
          <h1 className='text-4xl font-bold mb-4 mt-14 text-center md:text-left'>
            Adventures in Kodaikanal & Munnar
          </h1>
          <p className='mb-6 text-center md:text-left'>
            Our six-day journey through Kodaikanal and Munnar was an
            unforgettable adventure filled with breathtaking landscapes,
            thrilling rides, and unique experiences. From the misty hills of
            Kodaikanal to the lush tea gardens of Munnar, every moment was a
            celebration of nature's beauty.
          </p>
          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Highlights
          </h2>
          <ul className='list-disc pl-5 mb-6'>
            <li>Exploring Kodaikanal Lake</li>
            <li>Trekking near Suryanelli</li>
            <li>Visiting Guna Caves</li>
            <li>Riding through the scenic Gap Roads of Munnar</li>
          </ul>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Gallery
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
            {/* Placeholder for gallery images */}
            <img
              src='/images/kk1.jpeg'
              alt='Kodaikanal Image 1'
              className='w-full h-auto rounded-lg'
            />
            <img
              src='/images/kk2.jpeg'
              alt='Munnar Image 1'
              className='w-full h-auto rounded-lg'
            />
          </div>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Riding Through Kodaikanal
          </h2>
          <p className='mb-4 text-center md:text-left'>
            Our adventure began in Kodaikanal, where we rode around the
            picturesque Kodaikanal Lake, surrounded by lush greenery. The cool
            climate and scenic views made it an ideal spot for relaxation and
            exploration. We enjoyed boating on the lake, soaking in the tranquil
            atmosphere.
          </p>
          <p className='text-center md:text-left'>
            The ride through the hilly terrain offered thrilling experiences,
            with winding roads and stunning viewpoints. Stopping at various
            scenic spots allowed us to capture beautiful memories and enjoy the
            serene beauty of the landscape.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Thrilling Treks and Guna Caves
          </h2>
          <p className='mb-4 text-center md:text-left'>
            As we continued our journey to Munnar, we ventured into the famous
            Guna Caves, known for their unique rock formations and historical
            significance. The caves, surrounded by dense forests, provided a
            fascinating exploration opportunity, and we marveled at the natural
            wonders within.
          </p>
          <p className='text-center md:text-left'>
            One of the highlights of our trip was trekking near Suryanelli. The
            trek took us through breathtaking landscapes, where we encountered
            scenic tea gardens, lush valleys, and mesmerizing viewpoints. The
            thrill of trekking in such a picturesque setting was truly
            exhilarating, making it a memorable part of our adventure.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            The Scenic Gap Roads of Munnar
          </h2>
          <p className='mb-4 text-center md:text-left'>
            Riding through the Gap Roads in Munnar was one of the most thrilling
            experiences of our journey. These roads, known for their steep
            climbs and breathtaking views, offered a perfect backdrop for an
            exhilarating ride. As we navigated through the tea plantations and
            hills, we were treated to panoramic vistas that showcased the beauty
            of the Western Ghats.
          </p>
          <p className='text-center md:text-left'>
            Each turn revealed new landscapes, and we stopped frequently to take
            in the views and capture the beauty of Munnar. The rich aroma of tea
            wafting through the air made the experience even more delightful.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
