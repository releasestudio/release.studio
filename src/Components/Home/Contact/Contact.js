import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="contact">
                <h6>COORDONNÉES</h6>
                <p>10 rue de Charonne
                    <br className="contactLineJump"/>75011 Paris</p>
                <a href="mailto:contact@release.studio">contact@release.studio</a>
                <a href="tel:+33647096876">+33 6 47 09 68 76</a>
            </div>
        );
    }
}
 
export default Contact;