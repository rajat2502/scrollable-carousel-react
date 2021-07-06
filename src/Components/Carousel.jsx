import { useState, useEffect } from 'react';

import { fetchImages } from '../api';

import Icon from './Icon';
import CarouselCard from './CarouselCard';

function Carousel() {
  const [error, setError] = useState('');
  const [images, setImages] = useState([]);
  const [left, setLeft] = useState(0);

  const getImages = async () => {
    const data = await fetchImages('india');
    if (data.error) {
      setError(data.error);
    } else {
      setImages(data);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      {error ? (
        <p className='m-4 text-red-500 font-medium text-center'>{error}</p>
      ) : (
        <>
          <div
            style={{ left }}
            className='relative flex transition-all delay-150 duration-300 ease-in-out'
          >
            {images.map((image) => (
              <CarouselCard key={image.id} data={image} />
            ))}
          </div>
          <div className='flex w-screen justify-center'>
            <button
              disabled={!left}
              className='bg-gray-200 p-1 rounded m-2'
              onClick={() => setLeft((state) => state + 416)}
            >
              <Icon name='left' />
            </button>
            <button
              className='bg-gray-200 p-1 rounded m-2'
              onClick={() => setLeft((state) => state - 416)}
            >
              <Icon name='right' />
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Carousel;
