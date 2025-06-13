import { createContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import RegistrationPage from './pages/Registration';

const user = {
  id: 1,
  firstName: 'Test',
  lastName: 'Testovich',
  imgSrc: 'test',
  email: 'test@test.com',
  password: 'test',
  isMale: true,
};

const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value={user}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;

export { UserContext };
