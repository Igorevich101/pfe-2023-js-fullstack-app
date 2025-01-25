import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProfilePage from './pages/Profile';

function App() {

  return (
    <>

      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/profile' component={ProfilePage}/>
      </Switch>
    </>
  );
}

export default App;
