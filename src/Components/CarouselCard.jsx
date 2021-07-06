import PlaceholderImage from './PlaceholderImage';

function CarouselCard({ data }) {
  return (
    <div className='relative rounded-lg flex-shrink-0'>
      <div className='m-4 shadow-lg'>
        <PlaceholderImage
          className='rounded-lg h-80'
          alt={data.alt_description}
          src={data.urls.regular}
          width={(320 * data.width) / data.height}
        />
        <a
          href={data.user.links.html}
          target='_blank'
          rel='noreferrer'
          className='flex items-center absolute left-6 bottom-6'
        >
          <img
            src={data.user.profile_image.small}
            alt='Photographer'
            className='w-10 h-10 rounded-full mr-2'
          />
          <div className='flex flex-col text-white'>
            <span className='font-bold'>
              {data.user.first_name} {data.user.last_name}
            </span>
            <span className='text-sm'>{data.likes} likes received</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default CarouselCard;
