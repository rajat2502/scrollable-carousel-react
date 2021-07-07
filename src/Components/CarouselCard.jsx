import { downloadImg } from '../utils/helpers';

import PlaceholderImage from './PlaceholderImage';
import Icon from './Icon';

function CarouselCard({ data }) {
  return (
    <div className='carousel-card relative rounded-lg flex-shrink-0'>
      <div className='m-4 shadow-lg'>
        <PlaceholderImage
          className='rounded-lg h-80'
          alt={data.alt_description}
          src={data.urls.regular}
          width={(320 * data.width) / data.height}
        />
        <div className='absolute left-6 right-6 bottom-6 flex justify-between	'>
          <a
            href={data.user.links.html}
            target='_blank'
            rel='noreferrer'
            className='flex items-center'
          >
            <img
              src={data.user.profile_image.small}
              alt='Photographer'
              className='w-8 h-8 rounded-full mr-2'
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
          >
            <Icon name='download' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
