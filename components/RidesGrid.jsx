'use client';

import RideCard from './RideCard';

const rides = [
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
      'Our Chikmagaluru ride tested our skills as we conquered the steep climbs of Mullayanagiri.',
    link: '/chikmagaluru',
  },
  {
    title: 'Coastal Ride',
    imgSrc: '/images/coastal4.jpeg',
    description:
      'Our thrilling coastal ride took us through the breathtaking beauty of South India’s coastline.',
    link: '/coastal-ride',
  },
  {
    title: 'Sikkim',
    imgSrc: '/images/sikkim7.jpeg',
    description:
      'Our journey through Sikkim in December was nothing short of magical.',
    link: '/sikkim',
  },
  {
    title: 'Ladakh',
    imgSrc: '/images/main2.jpeg',
    description:
      'Adventure of Lifetime!, conquering high-altitude passes and rugged terrains in Ladakh.',
    link: '/ladakh',
  },
];

const RidesGrid = () => {
  return (
    <section className="pt-12 pb-24 max-w-6xl mx-auto">
      
      {/* Mobile horizontal scroll */}
      <div className="md:hidden overflow-x-auto snap-x snap-mandatory px-6">
        <div className="flex gap-6">
          {rides.map((ride) => (
            <div
              key={ride.title}
              className="min-w-[85%] snap-center"
            >
              <RideCard {...ride} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {rides.map((ride) => (
          <RideCard key={ride.title} {...ride} />
        ))}
      </div>
    </section>
  );
};

export default RidesGrid;
