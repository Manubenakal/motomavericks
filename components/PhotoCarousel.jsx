import { Carousel } from 'antd';
const PhotoCarousel = () => {
  return (
    <div className='w-full max-w-4xl mx-auto my-8'>
      <Carousel autoplay>
        <div>
          <img
            src='/images/chikmagaluru2.jpeg'
            alt='photo1'
            className='w-full h-auto object-cover rounded-xl'
          />
        </div>
        <div>
          <img
            src='/images/chikmagaluru3.jpeg'
            alt='photo2'
            className='w-full h-auto object-cover rounded-xl'
          />
        </div>
        <div>
          <img
            src='/images/chikmagaluru4.jpeg'
            alt='photo3'
            className='w-full h-auto object-cover rounded-xl'
          />
        </div>
        <div>
          <img
            src='/images/chikmagaluru3.jpeg'
            alt='photo4'
            className='w-full h-auto object-cover rounded-xl'
          />
        </div>
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;
