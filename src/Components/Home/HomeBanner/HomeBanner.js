import React, { Component } from 'react';
import './HomeBanner.css';


class HomeBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="HomeBanner">
                <video autoPlay muted preload="yes" loop playsInline>
                    <source src={require('../../../images/video_musique.mp4')} type="video/mp4" />
                </video>
                <div className="layer">
                    <div className="textoverlay">
                        <h3>Composition musicale<br/>et identité sonore</h3>
                        <h4>La création sonore au service de votre image.</h4>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default HomeBanner;