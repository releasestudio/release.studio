import React, { createContext, useState, useEffect } from 'react';
import firebase from './firebase'

export const UserContext = createContext();

export function UserContextProvider (props) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=> {
        firebase.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <UserContext.Provider value={{ currentUser }} >
            {props.children}
        </UserContext.Provider>
    )
}