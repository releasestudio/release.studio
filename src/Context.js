import React, { createContext, useState, useEffect } from 'react';
import firebase from './firebase'

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [language, setLanguage] = useState()
    const [currentUser, setCurrentUser] = useState(null);

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
      }, [language]
    )

    useEffect(()=> {
      firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);


    return (
        <Context.Provider value={{ language, setLanguage, currentUser }} >
            {children}
        </Context.Provider>
    )
} 