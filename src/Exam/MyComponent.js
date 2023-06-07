import React, { useState, useEffect } from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (count === 0) {
      setMessage('Not yet updated');
    } else if (count === 1) {
      setMessage(`Updated ${count} time`);
    } else {
      setMessage(`Updated ${count} times`);
    }
  }, [count]);

  useEffect(() => {
    //Mounted
    console.log('mounted');
    return () => {
        console.log('unmounting');
    }
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{message}</div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}