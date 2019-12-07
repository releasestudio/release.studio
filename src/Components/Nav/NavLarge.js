import React, { useContext } from 'react';
import {NavLink} from "react-router-dom";
import './NavLarge.css';
import {LanguageContext} from '../../LanguageContext';

export default function NavLarge(props){
    const {language, setLanguage} = useContext(LanguageContext);

    function frSelected(){
        return language === "fr" ? "selected" : "unSelected";
    }
    function enSelected(){
        return language === "en" ? "selected" : "unSelected";
    }


    return (
        <header>
            <div className="box">

                <NavLink to="/" className="fadein">
                    <img alt="logo" src={require('./Logo Horizontal.png')}/>
                </NavLink>

                <div className="nav">

                    <NavLink to="/Lionwood">Lionwood</NavLink>

                    <NavLink to="/blogpage">Collaborations</NavLink>

                    <h5 className={frSelected()} onClick={() => setLanguage("fr")}>fr</h5>
                    
                    <h5 className={enSelected()} onClick={() => setLanguage("en")}>en</h5>

                </div>
            </div> 
        </header>
    );
}
