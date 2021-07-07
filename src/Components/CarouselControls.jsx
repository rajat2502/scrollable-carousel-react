import Icon from './Icon';

function CarouselControls({ scrollProgress, prev, next }) {
  return (
    <div className='flex w-screen justify-center'>
      <button
        disabled={!scrollProgress}
        onClick={next}
        className='disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 p-1 rounded m-2'
      >
        <Icon name='left' />
      </button>
      <button
        disabled={scrollProgress === 100}
        onClick={prev}
        className='disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 p-1 rounded m-2'
      >
        <Icon name='right' />
      </button>
    </div>
  );
}

export default CarouselControls;
