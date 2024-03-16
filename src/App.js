import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h1 className='text-center'>Oops! We're temproarily Unavailable. <br /> See you soon!</h1>
    </>
  );
}

export default App;
