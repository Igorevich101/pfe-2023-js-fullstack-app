import { useState, useEffect } from 'react';

function FuncComponents(props) {
  const { test, test2, isOn } = props;

  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log('after each render func component');
    return () => {
      console.log('before unmount and 2+ render func component ');
    };
  }, []);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      <h1>FuncComponents</h1>
      <p> test is {test}</p>
      <p> test2 is {test2}</p>
      <p> Clicks is: {clicks}</p>
      <button onClick={handleClick}>Add click</button>
    </div>
  );
}

export default FuncComponents;
