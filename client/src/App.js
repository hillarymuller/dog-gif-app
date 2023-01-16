import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import DogCard from './DogCard';
import DogsContainer from './DogsContainer';
import NotFound from './NotFound';
import React, { useEffect, useContext, useState } from 'react';
import HouseholdDogs from './HouseholdDogs';
import UserDogs from './UserDogs';
import {UserContext} from './context/user';
import {ErrorContext} from './context/error';
import DogPage from './DogPage';


function App() {
  const { getCurrentUser, user } = useContext(UserContext);
  const {error} = useContext(ErrorContext);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    getCurrentUser();
    setLoading(false);
  }, []);

console.log(user)
  return (
    <div className="App">
      <Router>
        <header className="App-header">
        <h1>PUPPY PLAYTIME</h1>
        <NavBar />
        </header>
        <br></br>
        {loading ? <h3>Loading Doggos...</h3> : null}
        <div className="error">{error ? <h3 className="error">{error}</h3> : null}</div>
       <Switch>
        <Route path="/dogs/:dogId">
          <DogPage />
        </Route>
        <Route path="/users/:userId">
          <UserDogs />
        </Route>
        <Route path="/households/:householdId">
          <HouseholdDogs loading={loading} setLoading={setLoading} />
        </Route>
        <Route path="/dogs">
          <DogsContainer />
        </Route>
        <Route path="/signin">
          <SigninForm />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;