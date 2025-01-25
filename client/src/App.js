import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import RegistrationPage from './pages/Registration';

function App() {

  return (
    <>

      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/registration' component={RegistrationPage}/>
        <Route path='/profile' component={ProfilePage}/>
      </Switch>
    </>
  );
}

export default App;
