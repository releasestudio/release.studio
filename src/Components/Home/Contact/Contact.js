import React, { useContext } from 'react';
import './Contact.css';
import {Context}from '../../../Context';

export default function Contact(props){
    const {language} = useContext(Context);

    function textContact(){
        if(language === "fr"){
            return (
                <p>COORDONNÉES</p>
            )
        }else{
            return (
                <p>CONTACT</p>
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