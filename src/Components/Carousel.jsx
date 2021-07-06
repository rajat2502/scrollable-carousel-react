import { useState, useEffect } from 'react';
import axios from 'axios';

import Icon from './Icon';
import CarouselCard from './CarouselCard';

function Carousel() {
  const [images, setImages] = useState([]);
  const [left, setLeft] = useState(0);

  const getImages = async () => {
    const data = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=india&${process.env.REACT_APP_UNSPLASH_KEY}`
    );
    setImages(data.data.results);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
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
  );
}

export default Carousel;
