import React, { useContext } from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {UserContext} from './context/user';
import {ErrorContext} from './context/error';


const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    verticalAlign: "center",
    fontFamily: "Optima, sans-serif"
}
function NavBar() {
    const {user, signout} = useContext(UserContext);
    const {setError} = useContext(ErrorContext);
    const history = useHistory();
    
    function handleSignout(){
        signout();
        setError("Successfully signed out")
        history.push('/signin')
    }

 return (
    <div>
        <NavLink 
        exact
        style={style}
        activeStyle={{
            fontWeight: "bolder",
            color: "#D26901"
        }}
        to='/'>
            Home
            </NavLink>
        {user ? (
        <>
        <NavLink 
        exact
        style={style}
        activeStyle={{
            fontWeight: "bolder",
            color: "#D26901"
        }}
        to='/dogs'>
            All Dogs
        </NavLink>
        <NavLink
        exact
        style={style}
        activeStyle={{
            fontWeight: "bolder",
            color: "#D26901"
        }}
        to={`/users/${user.id}`}>
            My Dogs
        </NavLink>
        <NavLink
        exact
        style={style}
        activeStyle={{
            fontWeight: "bolder",
            color: "#D26901"
        }}
        to={`/households/${user.household.id}`}>
            Household Dogs
        </NavLink>
        <button className="button" onClick={handleSignout} >
            Sign Out
        </button>
</> ) : (
    <>
        <NavLink 
        exact 
        style={style}
        activeStyle={{
            fontWeight: "bolder",
            color: "#D26901"
        }}
        to='/dogs'>
            All Dogs
            </NavLink>
            <NavLink 
            exact
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "#D26901"
            }}
            to="/signup">
                Sign Up
            </NavLink>
            <NavLink 
            exact 
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "#D26901"
            }}
            to='/signin'>
                Sign In
            </NavLink>
            </>
)}
    
    </div>
 )
}
export default NavBar;