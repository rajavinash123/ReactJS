import React, { useState, useEffect } from 'react';

const ResizeComp = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => setWindowWidth(window.innerWidth);

  console.log('Adds a resize event listener to the window.');
  window.addEventListener('resize', handleResize);

  return () => {
    console.log('Cleans up the event listener when the component unmounts to avoid memory leaks.');
    window.removeEventListener('resize', handleResize);
  };
}, []);

  return (
    <div>
      <h1>Window Width: {windowWidth}px</h1>
    </div>
  );
};

export default ResizeComp;
