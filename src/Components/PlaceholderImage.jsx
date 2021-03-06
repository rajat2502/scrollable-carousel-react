import { useState, useEffect } from 'react';

import Placeholder from '../assets/placeholder.png';

function PlaceholderImage({ src, alt, width, delay, ...restProps }) {
  const [currentSrc, setCurrentSrc] = useState(Placeholder);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      // a small gap so that the placeholder div appears,
      //  as the API is damn fast
      setTimeout(() => setCurrentSrc(src), delay);
    };
  });

  return <img src={currentSrc} alt={alt} width={width} {...restProps} />;
}

export default PlaceholderImage;
