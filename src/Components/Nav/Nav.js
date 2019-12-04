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
                    <NavLink to="/" className="fadein"><img alt="logo" src={require('./Logo Horizontal.png')}/></NavLink>
                    <div className="nav">
                        <NavLink to="/Lionwood" className="fadein">Lionwood</NavLink>
                        <NavLink to="/Collaborations" className="fadein">Collaborations</NavLink>
                    </div>
                </div> 
            </header>
        );
    }
}
 
export default Nav;