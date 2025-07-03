import React, { useState, useEffect } from 'react';

const MultiEffectComp = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Effect 1 - Runs when `count` changes
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  // Effect 2 - Runs when `text` changes
  useEffect(() => {
    console.log('Text changed:', text);
  }, [text]);

  // Effect 3 - Runs once on mount
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <br />

      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..." 
      />
    </div>
  );
};

export default MultiEffectComp;
