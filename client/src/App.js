import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import DogsContainer from './DogsContainer';
import NotFound from './NotFound';
import React, { useEffect, useContext } from 'react';
import HouseholdDogs from './HouseholdDogs';
import UserDogs from './UserDogs';
import {UserContext} from './context/user';
import ErrorMessage from './ErrorMessage';
import DogPage from './DogPage';
import {ErrorContext} from './context/error';
import DogForm from './DogForm';
import EditDog from './EditDog';

function App() {
 
const {user, getCurrentUser} = useContext(UserContext);
  const {setError} = useContext(ErrorContext);




  useEffect(() => {
      getCurrentUser();
 
  }, []);

 
  return (
    <div className="App">
      <Router>
        <header className="App-header">
        <h1>PUPPY PLAYTIME</h1>
        <NavBar />
        </header>
        <br></br>
        <ErrorMessage />
       <Switch>
       <Route path="/dogs/new">
          <DogForm />
        </Route>
        <Route path="/dogs/:dogId/edit">
          <EditDog />
        </Route>
        <Route path="/dogs/:dogId">
          <DogPage />
        </Route>
        
        <Route path="/users/:userId">
          <UserDogs />
        </Route>
        <Route path="/households/:householdId">
          <HouseholdDogs />
        </Route>
      
        <Route path="/dogs">
          <DogsContainer  />
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