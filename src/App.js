import Carousel from "./Components/Carousel";
function App() {
  return (
    <div className="p-6 bg-gray-100 w-screen h-screen overflow-x-hidden">
      <h1 className="tracking-wider text-center my-6 text-4xl font-bold text-blue-600">
        Unsplash Gallery
      </h1>
      <Carousel />
    </div>
  );
}

export default App;
