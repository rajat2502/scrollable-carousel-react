import { useState, useEffect } from 'react';

import { downloadImg } from '../utils/helpers';

import PlaceholderImage from './PlaceholderImage';
import Icon from './Icon';

function CarouselCard({ data }) {
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 640px)').matches
  );

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    window.matchMedia('(max-width: 640px)').addEventListener('change', handler);
  });

  return (
    <div className='carousel-card relative rounded-lg flex-shrink-0'>
      <div className='m-2 sm:m-4 shadow-lg'>
        <PlaceholderImage
          className='rounded-lg h-64 sm:h-80'
          alt={data.alt_description}
          src={data.urls.regular}
          width={
            matches
              ? (254 * data.width) / data.height
              : (320 * data.width) / data.height
          }
          delay={100}
        />
        <div className='absolute left-6 right-6 bottom-6 flex justify-between	'>
          <a
            href={data.user.links.html}
            target='_blank'
            rel='noreferrer'
            className='flex items-center'
          >
            <PlaceholderImage
              src={data.user.profile_image.small}
              alt='Photographer'
              className='w-8 h-8 rounded-full mr-2'
              delay={0}
            />
            <div className='flex flex-col text-white'>
              <span className='font-bold text-sm'>
                {data.user.first_name} {data.user.last_name}
              </span>
              <span className='text-xs'>{data.likes} likes received</span>
            </div>
          </a>
          <button
            onClick={() => downloadImg(data.urls.regular)}
            title='Download Image'
            className='h-8 w-8 flex justify-center items-center bg-white rounded'
          >
            <Icon name='download' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
