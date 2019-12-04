import React, { Component } from 'react';
import Contact from './Contact/Contact';
import HomeBanner from './HomeBanner/HomeBanner';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
            <HomeBanner />
            <Contact />
            </div>
        );
    }
}
 
export default Home;