import { useState, useEffect, useRef } from 'react';

import { fetchImages } from '../api';

import Icon from './Icon';
import CarouselCard from './CarouselCard';

function Carousel() {
  const target = useRef(null);

  const [error, setError] = useState('');
  const [images, setImages] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [leftScroll, setLeftScroll] = useState(0);

  const getImages = async () => {
    const data = await fetchImages('india');
    if (data.error) {
      setError(data.error);
    } else {
      setImages(data);
    }
  };

  const scrollListener = () => {
    if (!target.current) return;

    const element = target.current;
    const windowScroll = element.scrollLeft;
    const totalWidth = element.scrollWidth - element.clientWidth;

    if (windowScroll === 0) return setScrollProgress(0);
    if (windowScroll > totalWidth) return setScrollProgress(100);

    setScrollProgress((windowScroll / totalWidth) * 100);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - target.current.offsetLeft);
    setLeftScroll(target.current.scrollLeft);
    target.current.classList.add('carousel-active');
  };

  const handleMouseMove = (e) => {
    if (isDragging && startX) {
      const endX = e.pageX - target.current.offsetLeft;
      const walk = (endX - startX) * 3;

      target.current.scrollLeft = leftScroll - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setStartX(null);
    setLeftScroll(0);
    target.current.classList.remove('carousel-active');
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('onmouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    getImages();
  }, []);

  console.log('render');
  return (
    <>
      {error ? (
        <p className='m-4 text-red-500 font-medium text-center'>{error}</p>
      ) : (
        <>
          <div
            ref={target}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onScroll={scrollListener}
            className='carousel relative overflow-x-auto flex transition-all delay-150 duration-300 ease-in-out'
          >
            {images.map((image) => (
              <CarouselCard key={image.id} data={image} />
            ))}
          </div>
          <div className='flex w-screen justify-center'>
            <button
              disabled={!scrollProgress}
              className='bg-gray-200 p-1 rounded m-2'
            >
              <Icon name='left' />
            </button>
            <button
              disabled={scrollProgress === 100}
              className='bg-gray-200 p-1 rounded m-2'
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
