import Carousel from './Components/Carousel';
function App() {
  return (
    <div className='p-6 bg-gray-300 w-screen h-screen overflow-x-hidden'>
      <div className='mx-4 my-6'>
        <h1 className='text-4xl font-bold text-blue-600'>Unsplash Gallery</h1>
      </div>
      <Carousel />
    </div>
  );
}

export default App;
