import React, { useContext } from 'react';
import {NavLink} from "react-router-dom";
import './NavNarrow.css';
import {Context} from '../../Context';

export default function NavNarrow(props){
    const {language, setLanguage} = useContext(Context);

    function toggleLanguage(){
        if(language === "fr"){
            setLanguage("en");
            localStorage.setItem('ReleaseStudioLanguage', 'en')
        }else{
            setLanguage("fr");
            localStorage.setItem('ReleaseStudioLanguage', "fr");
        }
    }

    function showOtherLanguage(){
        return language === "fr" ? "en" : "fr";
        
    }

    return (
        <header className="NarrowHeader">
            <div className="box">

                <NavLink to="/" className="fadein">
                    <img alt="logo" src={require('./Logo Horizontal.png')}/>
                </NavLink>

                <div className="narrowNav">

                    <NavLink to="/Lionwood">Lionwood</NavLink>

                    <NavLink to="/blogpage">{language === 'fr'?"Collaborations": "Show reel"}</NavLink>

                    <p onClick={() => toggleLanguage()}>{showOtherLanguage()}</p>

                </div>
            </div> 
        </header>
    );
}
