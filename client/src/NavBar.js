import React, { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import {UserContext} from './context/user';


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
    const {user} = useContext(UserContext);
    

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
        <button className="button">
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