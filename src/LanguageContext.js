import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState()

    useEffect(()=>{
        console.log(window.navigator.language.slice(0, 2))
        if (window.navigator.language.slice(0, 2) === 'fr' && !language){
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