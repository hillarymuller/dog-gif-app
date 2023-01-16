import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import DogCard from './DogCard';
import DogsContainer from './DogsContainer';
import NotFound from './NotFound';
import React, { useEffect, useContext } from 'react';
import HouseholdDogs from './HouseholdDogs';
import UserDogs from './UserDogs';
import {UserContext} from './context/user';
import {ErrorContext} from './context/error';
import NewHouseholdForm from './NewHouseholdForm';

function App() {
  const { getCurrentUser } = useContext(UserContext);
  const {error} = useContext(ErrorContext);
  

  useEffect(() => {
    getCurrentUser()
  }, []);

  return (
    <div className="App">
      <Router>
        <header className="App-header">
        <h1>PUPPY PLAYTIME</h1>
        <NavBar />
        </header>
        <br></br>
        <div className="error">{error ? error.map(err => <h3 className="error" key={err}>{err}</h3>) : null}</div>
       <Switch>
        <Route path="/dogs/:dogId">
          <DogCard />
        </Route>
        <Route path="/users/:userId">
          <UserDogs />
        </Route>
        <Route path="/households/:householdId">
          <HouseholdDogs />
        </Route>
        <Route path="/households/new">
          <NewHouseholdForm />
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