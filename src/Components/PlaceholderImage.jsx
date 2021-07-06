import { useState, useEffect } from 'react';

function PlaceholderImage({ src, alt, ...restProps }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      // a small gap so that the placeholder div appears,
      //  as the API is damn fast
      setTimeout(() => setLoaded(true), 300);
    };
  });

  return (
    <>
      {loaded ? (
        <img src={src} alt={alt} {...restProps} />
      ) : (
        <div className='rounded-lg h-80 w-80 bg-gradient-to-tr from-blue-100 to-blue-500'></div>
      )}
    </>
  );
}

export default PlaceholderImage;
