import ClassComponent from '../../components/ClassComponent';
import FuncComponent from '../../components/FuncComponent';

function HomePage() {
  const x = 5;
  return (
    <div className="App">
      <ClassComponent test="test" test2={x}/>
      <FuncComponent />
    </div>
  );
}

export default HomePage;
