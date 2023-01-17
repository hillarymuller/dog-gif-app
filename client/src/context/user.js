import React, { useState, useContext, useCallback } from 'react';
import {ErrorContext} from './error';

const UserContext = React.createContext()

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const {setError} = useContext(ErrorContext);

    const getCurrentUser = useCallback(async () => {
        try { 
            const r = await fetch("/me")
            if (r.ok) {
                    const data = await r.json()
                    setUser(data)
                } else {
                    const err = await r.json()
                    setError(err.error)
                }
        } catch (error) {
            setError(error.error)
        }
    }, [setError])


    const signin = async (userDetails) => {
        try {
            const resp = await fetch("/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(userDetails)
            })
            if (resp.ok) {
                const data = await resp.json()
                setUser(data)
            } else {
                const errorMessage = await resp.json()
                setError(errorMessage.error)
                return false
            }
        } catch(err) {
            setError(err.error)
        }
    }
    const signup = async (userDetails) => {
        try {
            const resp = await fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(userDetails)
            })
            if (resp.ok) {
                const data = await resp.json()
                console.log(data)
            } else {
                const errorMessage = await resp.json()
                setError(errorMessage.error)
                console.log(errorMessage.error)
            }
        } catch(err) {
            setError(err.error)
        }
    }
    const signout = async () => {
        try {
            await fetch("/signout", {
                method: "DELETE"
            })
            setUser(null)
            return true
        } catch(err) {
            setError(err.error)
            return false
        }
    }
    return (
        <UserContext.Provider value={{user, setUser, getCurrentUser, signin, signup, signout}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};