import React, { useContext } from 'react';
import {NavLink} from "react-router-dom";
import './NavNarrow.css';
import {ContextLanguage} from '../../UserContext';

export default function NavNarrow(props){
    const {language, setLanguage} = useContext(ContextLanguage);

    function toggleLanguage(){
        return language === "fr" ? setLanguage("en") : setLanguage("fr");
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

                    <NavLink to="/Lionwood" className="fadein">Lionwood</NavLink>

                    <NavLink to="/Collaborations" className="fadein">Collaborations</NavLink>

                    <h5 onClick={() => toggleLanguage()}>{showOtherLanguage()}</h5>

                </div>
            </div> 
        </header>
    );
}
