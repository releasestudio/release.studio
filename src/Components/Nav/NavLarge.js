import React, { useContext } from 'react';
import {NavLink} from "react-router-dom";
import './NavLarge.css';
import {Context} from '../../Context';

export default function NavLarge(props){
    const {language, setLanguage} = useContext(Context);

    function frSelected(){
        return language === "fr" ? "selected" : "unSelected";
    }
    function enSelected(){
        return language === "en" ? "selected" : "unSelected";
    }

    function changeLanguage(lgChoice){
        setLanguage(lgChoice);
        localStorage.setItem('ReleaseStudioLanguage', lgChoice)
    }

    return (
        <header>
            <div className="box">

                <NavLink to="/" className="fadein">
                    <img alt="logo" src={require('./Logo Horizontal.png')}/>
                </NavLink>

                <div className="nav">

                    <NavLink to="/Lionwood">Lionwood</NavLink>

                    <NavLink to="/blogpage">{language === 'fr'?"Collaborations": "Show reel"}</NavLink>

                    <p className={frSelected()} onClick={()=> changeLanguage("fr")}>fr</p>
                    
                    <p className={enSelected()} onClick={()=> changeLanguage("en")}>en</p>

                </div>
            </div> 
        </header>
    );
}
