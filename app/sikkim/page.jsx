import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css'; // Ant Design Styles

const SikkimTripPage = () => {
  return (
    <div>
      <Header />
      <div
        className='bg-cover bg-center min-h-screen text-white'
        style={{
          backgroundImage:
            'url(https://cdn.pixabay.com/photo/2021/11/21/21/14/mountain-6815304_1280.jpg)',
        }}
      >
        <div className='max-w-5xl mx-auto p-6'>
          <h1 className='text-4xl font-bold mb-4 mt-14 text-center md:text-left'>
            Sikkim Adventure: Riding through the Old Silk Route in December
          </h1>
          <p className='mb-6 text-center md:text-left'>
            Our journey through Sikkim in December was nothing short of magical.
            From the old silk route to surviving freezing temperatures while
            riding, every moment was an adventure. We explored East, West, and
            South Sikkim, experienced the serenity of Pelling, and visited the
            mystical Ravangla Monastery.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Highlights of the Sikkim Trip
          </h2>
          <ul className='list-disc pl-5 mb-6'>
            <li>Exploring the Old Silk Route</li>
            <li>Surviving -4°C temperatures during the ride</li>
            <li>Visiting Pelling and its stunning views</li>
            <li>Ravangla Monastery and its serene atmosphere</li>
            <li>Riding through East, West, and South Sikkim</li>
          </ul>

          <div className='mb-6'>
            <div className='card w-full bg-base-100 shadow-xl'>
              <div className='card-body'>
                <h2 className='card-title'>The Old Silk Route Adventure</h2>
                <p className='mb-4'>
                  One of the most unique experiences of our Sikkim trip was
                  riding along the **Old Silk Route**. This historical route,
                  once used for trade between India and China, offered an
                  unforgettable journey through the mountains. The roads were
                  winding and sometimes treacherous, but the scenic views made
                  it all worth it.
                </p>
                <p>
                  The route took us through small villages, dense forests, and
                  snow-capped peaks. We were surrounded by the history of the
                  Silk Route, and every corner revealed something new—whether it
                  was an old trading post or a remote village perched high in
                  the mountains.
                </p>
              </div>
            </div>
          </div>

          <div className='mb-6'>
            <div className='card w-full bg-base-100 shadow-xl'>
              <div className='card-body'>
                <h2 className='card-title'>
                  Surviving -4°C: The Thrill of Riding in Freezing Temperatures
                </h2>
                <p className='mb-4'>
                  Riding at **-4°C** was undoubtedly one of the biggest
                  challenges of our trip. The cold wind, coupled with the icy
                  roads, made the ride physically demanding. However, the
                  adrenaline rush of riding through the snow-covered roads kept
                  us going.
                </p>
                <p>
                  We had to take extra precautions, layering up to stay warm and
                  keeping our bikes in check to avoid any breakdowns. Despite
                  the freezing temperatures, the stunning mountain vistas and
                  the sense of accomplishment after each challenging ride kept
                  our spirits high.
                </p>
              </div>
            </div>
          </div>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Gallery: Capturing the Beauty of Sikkim
          </h2>
          <div className='mb-6'>
            <Carousel
              autoplay
              prevArrow={
                <div className='flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg text-black'>
                  <LeftOutlined className='text-xl' />
                </div>
              }
              nextArrow={
                <div className='flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg text-black'>
                  <RightOutlined className='text-xl' />
                </div>
              }
            >
              <div>
                <img
                  src='/images/sikkim1.jpeg'
                  alt='Sikkim Image 1'
                  className='w-full h-[1000px] object-cover rounded-lg'
                />
              </div>
              <div>
                <img
                  src='/images/sikkim2.jpeg'
                  alt='Sikkim Image 2'
                  className='w-full h-[1000px] object-cover rounded-lg'
                />
              </div>
              <div>
                <img
                  src='/images/sikkim3.jpeg'
                  alt='Sikkim Image 3'
                  className='w-full h-[1000px] object-cover rounded-lg'
                />
              </div>
              <div>
                <img
                  src='/images/sikkim4.jpeg'
                  alt='Sikkim Image 4'
                  className='w-full h-[1000px] object-cover rounded-lg'
                />
              </div>
              <div>
                <img
                  src='/images/sikkim5.jpeg'
                  alt='Sikkim Image 5'
                  className='w-full h-[1000px] object-cover rounded-lg'
                />
              </div>
              <div>
                <img
                  src='/images/sikkim6.jpeg'
                  alt='Sikkim Image 6'
                  className='w-full h-[1000px] object-cover rounded-lg'
                />
              </div>
              <div>
                <img
                  src='/images/sikkim7.jpeg'
                  alt='Sikkim Image 7'
                  className='w-full h-[1000px] object-cover rounded-lg'
                />
              </div>
              <div>
                <img
                  src='/images/sikkim8.jpeg'
                  alt='Sikkim Image 8'
                  className='w-full h-[1000px] object-cover rounded-lg'
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SikkimTripPage;
