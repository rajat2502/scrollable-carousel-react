import { useState } from 'react';

import { fetchImages } from '../api';

import Icon from './Icon';

function CarouselHeader({ setData, setLoading, getRandomImages }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      setLoading(true);
      const data = await fetchImages(searchTerm);
      setData(data);
    }
  };

  return (
    <div className='mx-2 my-2 flex justify-between flex-wrap'>
      <form onSubmit={handleSubmit} className='flex flex-wrap'>
        <input
          type='text'
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Enter keyword...'
          className='rounded placeholder-gray-500 py-2 px-4 my-2 sm:mr-4 bg-gray-300 border border-gray-400 w-full sm:w-64 focus:outline-none'
        />
        <button
          type='submit'
          title='Search Images'
          className='flex items-center justify-center rounded py-2 px-4 my-2 w-full sm:w-auto bg-blue-500 transition duration-500 ease-in-out hover:bg-blue-600 text-white font-medium'
        >
          <Icon name='search' /> &nbsp;Search Images
        </button>
      </form>
      <button
        onClick={getRandomImages}
        title='Get Random Images'
        className='flex items-center justify-center rounded py-2 px-4 my-2 w-full sm:w-auto bg-blue-500 transition duration-500 ease-in-out hover:bg-blue-600 text-white font-medium'
      >
        Shuffle &nbsp;
        <Icon name='shuffle' />
      </button>
    </div>
  );
}

export default CarouselHeader;
