import Icon from './Icon';

function CarouselControls({ scrollProgress }) {
  return (
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
  );
}

export default CarouselControls;
