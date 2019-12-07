import React, { useContext } from 'react';
import './Contact.css';
import {LanguageContext}from '../../../LanguageContext';

export default function Contact(props){
    const {language} = useContext(LanguageContext);

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
            <a href="mailto:contact@release.studio">contact@release.studio</a>
            <a href="tel:+33647096876">+33 6 47 09 68 76</a>
        </div>
    );
}