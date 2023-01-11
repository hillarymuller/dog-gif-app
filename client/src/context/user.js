import React, { useState, useContext, useEffect, useCallback } from 'react';
import {ErrorContext} from './error';
const UserContext = React.createContext()

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const {setError} = useContext(ErrorContext);

    const getCurrentUser = useCallback(async () => {
        try {
            const resp = await fetch("/me")
                if (resp.status === ok) {
                    const data = await resp.json()
                    setUser(data)
                } else {
                    const errorMessage = await resp.json()
                    setError(errorMessage.error)
                }
        } catch(err) {
            setError(err.error)
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
            if (resp.status === ok) {
                const data = await resp.json()
                setUser(data)
                return true
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
            if (resp.status === ok) {
                const data = await resp.json()
                setUser(data)
            } else {
                const errorMessage = await resp.json()
                setError(errorMessage.error)
            }
        } catch(err) {
            setError(err.error)
        }
    }
    const signout = async () => {
        try {
            const resp = await fetch("/signout", {
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
        <UserContext.Provider value={{ user, setUser, getCurrentUser, signin, signup, signout }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};