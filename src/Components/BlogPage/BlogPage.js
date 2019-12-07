import React from 'react';
import Blog from './Blog';
import './BlogPage.css';
import {NavLink} from "react-router-dom";

export default function BlogPage(){
    
    return (
        <div className="BlogPage">
            <Blog />
            <div className="footer"><NavLink to="/blogeditpage" >Copyright © Release Studio {new Date().getFullYear()}</NavLink></div>
        </div>    
    );
}