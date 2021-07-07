import { useState, useEffect, useRef, useCallback } from 'react';

import { fetchImages, fetchRandomImages } from '../api';

import CarouselHeader from './CarouselHeader';
import CarouselCard from './CarouselCard';
import CarouselControls from './CarouselControls';

import Loader from '../assets/loader.gif';

function Carousel() {
  const target = useRef(null);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [leftScroll, setLeftScroll] = useState(0);

  const setData = (data) => {
    if (data.error) {
      setError(data.error);
    } else {
      setImages(data);
    }
    setLoading(false);
    setScrollProgress(0);
  };

  const getImages = useCallback(async () => {
    setLoading(true);
    const data = await fetchImages('space');
    setData(data);
  }, []);

  const getRandomImages = async () => {
    setLoading(true);
    const data = await fetchRandomImages();
    setData(data);
  };

  const prev = () => {
    const left = target.current.scrollLeft,
      count = target.current.childElementCount;
    let newX = 0;

    for (let i = 0; i < count; i++) {
      newX += target.current.children[i].clientWidth;
      if (left < newX) {
        target.current.scroll({
          left: newX,
          top: 0,
          behavior: 'smooth',
        });
        return;
      }
    }
  };

  const next = () => {
    const left = target.current.scrollLeft,
      count = target.current.childElementCount;
    let newX = 0;

    for (let i = 0; i < count; i++) {
      const elementWidth = target.current.children[i].clientWidth;
      newX += elementWidth;
      console.log({ left, newX });
      if (left <= newX) {
        target.current.scroll({
          left: newX - elementWidth,
          top: 0,
          behavior: 'smooth',
        });
        return;
      }
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
      const walk = endX - startX;

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
  }, [getImages]);

  return (
    <div className='sm:mt-24'>
      <CarouselHeader
        setData={setData}
        setLoading={setLoading}
        getRandomImages={getRandomImages}
      />
      {error ? (
        <p className='m-4 text-red-500 font-medium text-center'>{error}</p>
      ) : (
        <>
          {loading ? (
            <img className='mt-12 mx-auto h-24' src={Loader} alt='loader' />
          ) : (
            <>
              {images.length ? (
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
                  <CarouselControls
                    prev={prev}
                    next={next}
                    scrollProgress={scrollProgress}
                  />{' '}
                </>
              ) : (
                <p className='text-center mt-4 font-medium'>
                  No images found for the search term!
                </p>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Carousel;
