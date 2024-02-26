import React, { useState, useEffect } from 'react';

function Greeting(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>You've been greeted {count} times.</p>
    </div>
  );
}

export default Greeting;