import Icon from './Icon';

function CarouselControls({ scrollProgress, prev, next }) {
  return (
    <div className='flex w-screen justify-center'>
      <button
        disabled={!scrollProgress}
        onClick={next}
        className='disabled:opacity-50 bg-gray-100 p-1 rounded m-2'
      >
        <Icon name='left' />
      </button>
      <button
        disabled={scrollProgress === 100}
        onClick={prev}
        className='disabled:opacity-50 bg-gray-100 p-1 rounded m-2'
      >
        <Icon name='right' />
      </button>
    </div>
  );
}

export default CarouselControls;
