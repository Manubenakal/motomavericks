import Link from 'next/link';

export default function Main() {
  return (
    <section className='text-black body-font'>
      <div className='max-w-5xl pt-24 pb-24 mx-auto'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl text-center font-bold text-white mb-6'>
          A Riding Club started with Passion
        </h1>
        <h2 className='text-xl md:text-2xl font-semibold pb-11 text-gray-700 text-center'>
          Since 2023
        </h2>
      </div>
      <div className='container flex flex-col items-center justify-center mx-auto'>
        <img
          className='object-cover object-center w-full md:w-3/4 mb-10 border shadow-md rounded-3xl'
          alt='Placeholder Image'
          src='https://images.pexels.com/photos/19645807/pexels-photo-19645807/free-photo-of-man-in-a-helmet-standing-on-a-motorcycle-with-arms-spread.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
      </div>
      <h2 className='pt-20 md:pt-40 mb-4 text-3xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-center text-gray-200'>
        Places We've Been To!
      </h2>
      <p className='mx-auto text-base md:text-xl text-center text-gray-300 font-normal leading-relaxed lg:w-2/3'>
        These are the thrilling bike trips MotoMavericks has embarked on,
        exploring the most scenic and challenging routes across South India.
      </p>

      {/* Card Section */}
      <div className='pt-12 pb-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {[
          {
            title: 'Coorg 2023',
            imgSrc: '/images/coorgg.png',
            description:
              'In 2023, we rode through Coorg’s scenic Western Ghats, navigating winding roads, misty hills, and coffee plantations. The climb to Mandalpatti rewarded us with breathtaking views, making the journey unforgettable.',
            link: '/coorg',
          },
          {
            title: 'Wayanad-Ooty 2023',
            imgSrc: '/images/ooty.jpeg',
            description:
              'Our 2023 ride to Wayanad and Ooty was filled with thrilling mountain passes and sharp curves. We explored Edakkal Caves in Wayanad and enjoyed Ooty’s cool air and stunning tea gardens after a challenging ascent.',
            link: '/wayanad-ooty',
          },
          {
            title: 'Kodaikanal-Munnar 2024',
            imgSrc: '/images/munnar.jpeg',
            description:
              'In 2024, we took on the steep, curvy roads to Kodaikanal, enjoying its serene lakes and forests. From there, we rode to Munnar through tea-covered hills, where misty weather and wildlife made the adventure exhilarating.',
            link: '/kodaikanal-munnar',
          },
          {
            title: 'Chikmagaluru',
            imgSrc: '/images/ckmm.jpeg',
            description:
              'Our Chikmagaluru ride tested our skills as we conquered the steep climbs of Mullayanagiri, Karnataka’s highest peak. The misty coffee plantations and rugged trails of Baba Budan Giri were a perfect blend of challenge and beauty.',
            link: '/chikmagaluru',
          },
        ].map(({ title, imgSrc, description, link }) => (
          <Link href={link} key={title}>
            <div className='bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 cursor-pointer'>
              <img
                className='w-full h-40 object-cover rounded-md'
                src={imgSrc}
                alt={title}
              />
              <h3 className='pt-4 font-semibold text-lg text-white'>{title}</h3>
              <p className='pt-2 text-md text-gray-200'>{description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className='pt-32 pb-32 max-w-6xl mx-auto'>
        <div className='text-center'>
          <h1 className='mb-5 text-3xl md:text-6xl font-bold text-white'>
            In Progress
          </h1>
          <h2 className='mb-9 text-xl md:text-2xl font-semibold text-gray-200'>
            Stay tuned for more updates!
          </h2>
          <input
            type='email'
            placeholder='jack@example.com'
            name='email'
            autoComplete='email'
            className='border border-gray-600 w-full md:w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black'
          />
          <a
            className='inline-flex items-center px-10 py-3 mt-2 ml-0 md:ml-2 font-medium text-black transition duration-500 ease-in-out transform border rounded-lg bg-white'
            href='/'
          >
            <span className='justify-center'>Subscribe</span>
          </a>
        </div>
      </div>
    </section>
  );
}
