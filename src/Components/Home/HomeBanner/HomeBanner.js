import React, { useContext } from 'react';
import './HomeBanner.css';
import {LanguageContext} from '../../../Context';

export default function HomeBanner(props) {
    const {language} = useContext(LanguageContext);

    function textBanner(){
        if(language === "fr"){
            return (
            <div className="textoverlay">
                <h3>Composition musicale<br/>et identité sonore</h3>
                <h4>La création sonore au service de votre image.</h4>
            </div>
            )
        }else{
            return (
            <div className="textoverlay">
            <h3>Music Composition <br/>and Sonic Branding</h3>
            <h4>Custum sound for your custum stories</h4>
        </div>
        )
        }
    }
    return (
    <div className="HomeBanner">
        <video autoPlay muted preload="yes" loop playsInline>
            <source src={require('./video_musique.mp4')} type="video/mp4" />
        </video>
        <div className="layer">
            {textBanner()}
        </div>
    </div>
);
}