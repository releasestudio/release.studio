import React, { useContext } from 'react';
import './HomeBanner.css';
import {Context} from '../../../Context';

export default function HomeBanner(props) {
    const {language} = useContext(Context);

    function textBanner(){
        if(language === "fr"){
            return (
            <div className="textoverlay">
                <h3>Composition musicale<br/>et identité sonore</h3>
                <p>La création sonore au service de votre image.</p>
            </div>
            )
        }else{
            return (
            <div className="textoverlay">
            <h3>Music Composition <br/>and sound identity</h3>
            <p>Bespoke sound in your image</p>
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