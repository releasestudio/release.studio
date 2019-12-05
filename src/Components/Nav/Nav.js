import React from 'react';
import {NavLink} from "react-router-dom";
import './Nav.css';

export default function Nav(props){
    return (
        <header>
            <div className="box">
                <NavLink to="/" className="fadein"><img alt="logo" src={require('./Logo Horizontal.png')}/></NavLink>
                <div className="nav">
                    <NavLink to="/Lionwood" className="fadein">Lionwood</NavLink>
                    <NavLink to="/Collaborations" className="fadein">Collaborations</NavLink>
                    {/* <img alt='frFlag' src={require("./frFlag.jpg")} height="5" width="5" />
                    <img alt='engFlag' src={require("./engFlag.jpg")} height="5" width="5" /> */}
                </div>
            </div> 
        </header>
    );
}
