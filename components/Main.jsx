import Link from 'next/link';
import Slider from '../components/Slider';
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

      {/* Card Section */}
      <div className='pt-12 pb-24 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-8 lg:grid-cols-4 gap-8'>
        {[
          {
            title: 'Coorg 2023',
            imgSrc: '/images/coorg.avif',
            description:
              'In 2023, we rode through Coorg’s scenic Western Ghats, navigating winding roads, misty hills, and coffee plantations.',
            link: '/coorg',
          },
          {
            title: 'Wayanad-Ooty 2023',
            imgSrc: '/images/ooty.jpg',
            description:
              'Our 2023 ride to Wayanad and Ooty was filled with thrilling mountain passes and sharp curves.',
            link: '/wayanad-ooty',
          },
          {
            title: 'Kodaikanal-Munnar 2024',
            imgSrc: '/images/kk3.jpeg',
            description:
              'In 2024, we took on the steep, curvy roads to Kodaikanal, enjoying its serene lakes and forests.',
            link: '/kodaikanal-munnar',
          },
          {
            title: 'Chikmagaluru',
            imgSrc: '/images/chikmagaluru1.jpeg',
            description:
              'Our Chikmagaluru ride tested our skills as we conquered the steep climbs of Mullayanagiri, Karnataka’s highest peak.',
            link: '/chikmagaluru',
          },
        ].map(({ title, imgSrc, description, link }) => (
          <Link href={link} key={title}>
            <div className='bg-gray-800 rounded-lg p-4 md:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 cursor-pointer'>
              <img
                className='w-full h-48 md:h-56 lg:h-64 object-cover rounded-md mb-4'
                src={imgSrc}
                alt={title}
              />
              <h3 className='pt-2 font-semibold text-lg md:text-xl text-white'>
                {title}
              </h3>
              <p className='pt-2 text-sm md:text-md text-gray-200'>
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className='pt-32 pb-32 max-w-6xl mx-auto p-5'>
        <Slider />
      </div>
    </section>
  );
}
