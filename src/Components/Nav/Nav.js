import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

import './Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <header>
                <div className="box">
                    <NavLink to="/" className="fadein"><img alt="logo" src={require('../../images/Logo Horizontal.png')}/></NavLink>
                    <div className="nav">
                        <NavLink to="/Lionwood" className="fadein">Lionwood</NavLink>
                        <NavLink to="/Colaborations" className="fadein">Colaborations</NavLink>
                    </div>
                </div> 
            </header>
        );
    }
}
 
export default Nav;