import React, { useContext } from 'react';
import {NavLink} from "react-router-dom";
import './NavLarge.css';
import {ContextLanguage} from '../../UserContext';

export default function NavLarge(props){
    const {language, setLanguage} = useContext(ContextLanguage);

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

                    <NavLink to="/Lionwood" className="fadein">Lionwood</NavLink>

                    <NavLink to="/Collaborations" className="fadein">Collaborations</NavLink>

                    <h5 className={frSelected()} onClick={() => setLanguage("fr")}>fr</h5>
                    
                    <h5 className={enSelected()} onClick={() => setLanguage("en")}>en</h5>

                </div>
            </div> 
        </header>
    );
}
