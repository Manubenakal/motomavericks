import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Page = () => {
  return (
    <div>
      <Header />
      <div
        className='bg-cover bg-center min-h-screen text-white'
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/37487/pexels-photo-37487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      >
        <div className='max-w-5xl mx-auto p-6'>
          <h1 className='text-4xl font-bold mb-4 mt-14 text-center md:text-left'>
            Coastal Ride Adventure: From Kannur to Rameswaram
          </h1>
          <p className='mb-6 text-center md:text-left'>
            Our thrilling coastal ride took us on a journey through the
            breathtaking beauty of South India’s coastline. We covered several
            famous destinations, including Kannur, Alleppey, Varkala,
            Kanyakumari, and Rameswaram, with an unforgettable 650 km ride in a
            single day. From pristine beaches to rugged roads and coastal views,
            this adventure was truly one for the books.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Highlights of the Ride
          </h2>
          <ul className='list-disc pl-5 mb-6'>
            <li>Riding through the coastal roads of Kannur</li>
            <li>Exploring the backwaters of Alleppey</li>
            <li>Relaxing at Varkala’s cliffside beaches</li>
            <li>Visiting the iconic Kanyakumari</li>
            <li>Marveling at the Rameswaram temple</li>
            <li>Surviving the bad roads between Kannur and Varkala</li>
          </ul>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Journey Through Coastal India
          </h2>
          <p className='mb-4 text-center md:text-left'>
            Our journey began in **Kannur**, where we explored its serene
            beaches and historic forts. Riding along the coastal roads, we felt
            the cool sea breeze as we made our way southwards. The route to
            **Alleppey** was filled with scenic backwaters and lush green
            landscapes, offering us the perfect break before we continued our
            journey.
          </p>
          <p className='text-center md:text-left'>
            From Alleppey, we continued to **Varkala**, where we stopped to
            admire the famous cliffside views overlooking the Arabian Sea. The
            picturesque beaches and vibrant atmosphere made it one of the
            highlights of the trip. As we pushed forward towards
            **Kanyakumari**, we marveled at the fusion of three seas at the
            southernmost tip of India.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            The 650 Km Challenge: A Marathon Drive
          </h2>
          <p className='mb-4 text-center md:text-left'>
            One of the most memorable parts of the trip was the **650 km drive**
            from **Rameswaram back to Bangalore** in a single day. It was a true
            test of endurance as we crossed many cities, villages, and coastal
            stretches. The long hours on the road were filled with adventure,
            excitement, and a few challenging patches.
          </p>
          <p className='text-center md:text-left'>
            We faced some difficult terrain, especially between **Kannur** and
            **Varkala**, where the roads were in poor condition. Potholes,
            uneven surfaces, and narrow lanes made the drive tough, but the
            beautiful coastal views made up for it. Despite the rough patches,
            our spirits remained high as we continued this unforgettable
            journey.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            The Coastal Views
          </h2>
          <p className='mb-4 text-center md:text-left'>
            The coastal stretch was dotted with picturesque views that we
            couldn’t get enough of. From the sparkling blue waters of the
            Arabian Sea to the golden sands, every stop along the way had
            something new to offer. We made several pit stops, capturing the
            breathtaking sunsets and scenic landscapes that made this ride so
            special.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Rameswaram: A Sacred End to Our Journey
          </h2>
          <p className='mb-4 text-center md:text-left'>
            Our coastal ride culminated at **Rameswaram**, where we explored the
            famous **Ramanathaswamy Temple**. The spiritual energy of the place,
            coupled with the stunning sea views, made it a fitting conclusion to
            our journey. We marveled at the architecture of the temple and
            learned about its rich cultural significance.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Final Thoughts on the Ride
          </h2>
          <p className='mb-4 text-center md:text-left'>
            This coastal ride was a blend of adventure, exploration, and sheer
            determination. We faced tough roads, long hours, and unexpected
            challenges, but the experience was incredibly rewarding. The route
            we took showcased some of the best coastal views and cultural
            landmarks of South India. If you’re someone who loves the thrill of
            the open road and the beauty of nature, this is a journey you
            shouldn’t miss.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            Gallery
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
                  src='/images/coastal4.jpeg'
                  alt='coastal Image 1'
                  className='w-full h-auto object-cover rounded-lg'
                />
              </div>
              <div>
                <img
                  src='/images/coastal2.jpeg'
                  alt='coastal Image 2'
                  className='w-full h-auto object-cover rounded-lg'
                />
              </div>
              <div>
                <img
                  src='/images/coastal3.jpeg'
                  alt='coastal Image 3'
                  className='w-full h-auto object-cover rounded-lg'
                />
              </div>
              <div>
                <img
                  src='/images/coastal1.jpeg'
                  alt='coastal Image 4'
                  className='w-full h-auto object-cover rounded-lg'
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

export default Page;
