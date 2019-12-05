import React, { useContext, useState } from 'react';
import './Contact.css';
import UserContext from '../../../LanguageContext';

export default function Contact(props){
    const [language] = useState(useContext(UserContext));

    function textContact(){
        if(language === "fr"){
            return (
                <h6>COORDONNÉES</h6>
            )
        }else{
            return (
                <h6>CONTACT</h6>
        )
        }
    }
    return (
        <div className="contact">
            {textContact()}
            <p>10 rue de Charonne
                <br className="contactLineJump"/>75011 Paris</p>
            <a href="mailto:contact@release.studio">contact@release.studio</a>
            <a href="tel:+33647096876">+33 6 47 09 68 76</a>
        </div>
    );
}