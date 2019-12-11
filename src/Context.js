import React, { createContext, useState, useEffect } from 'react';
import firebase from './firebase'

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState()

    useEffect(()=>{
      const localStorageLanguage = localStorage.getItem('ReleaseStudioLanguage');
        if (localStorageLanguage){
          setLanguage(localStorageLanguage)
        }
        else if (window.navigator.language.slice(0, 2) === 'fr' && !language){
          setLanguage('fr')
        }else if(window.navigator.language.slice(0, 2) === 'en' && !language){
          setLanguage('en')
        }
      }, [language])

    return (
        <LanguageContext.Provider value={{ language, setLanguage }} >
            {children}
        </LanguageContext.Provider>
    )
} 
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