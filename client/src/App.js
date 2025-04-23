import { useState } from 'react';
import ClassComponent from './components/ClassComponent';
import FuncComponents from './components/FuncComponent';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const x = 1;

  return (
    <div className="App">
      <p>Component is currently {isVisible ? 'visible' : 'hidden'}</p>
      {isVisible && <ClassComponent test="test prop" test2={x} isOn />}
      {isVisible && <FuncComponents test="test prop" test2={x} isOn />}
    </div>
  );
}

export default App;
