import React, { createContext, useState, useEffect } from 'react';
import firebase from './firebase'

export const Context = createContext();

export const ContextProvider = ({ children }) => {

    // language pref
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
      }, [language]
    )



    // firebase login
    const [currentUser, setCurrentUser] = useState(localStorage.FirebaseUser);


    useEffect(()=> {
        firebase.auth().onAuthStateChanged((user)=>{
          localStorage.setItem('FirebaseUser', user)
          setCurrentUser(user)
      })
      return localStorage.setItem('FirebaseUser', null)
  }, []);


    return (
        <Context.Provider value={{ language, setLanguage, currentUser }} >
            {children}
        </Context.Provider>
    )
} 