import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import DogCard from './DogCard';
import DogsContainer from './DogsContainer';
import NotFound from './NotFound';
import React from 'react';
import HouseholdDogs from './HouseholdDogs';
import UserDogs from './UserDogs';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
        <h1>PUPPY RECESS</h1>
        <NavBar />
        </header>
        <br></br>
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