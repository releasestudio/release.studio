import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route,} from 'react-router-dom';
import './App.css';
import NavLarge from './Components/Nav/NavLarge';
import NavNarrow from './Components/Nav/NavNarrow';
import BlogCreate from './Components/BlogCreate/BlogCreate'
import Home from './Components/Home/Home';
import Lionwood from './Components/Lionwood/Lionwood';
import Collaborations from './Components/Collaborations/Collaborations.js';
import {LanguageContextProvider} from './LanguageContext';
import {UserContextProvider} from './UserContext';

export default function App(props){
    const [windowWidth, setWindowWidth] = useState (window.innerWidth);

    useEffect(()=> {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize)
    },[])

    function headerForWidth(){
      if (windowWidth <= 440){
        return <NavNarrow />
      }else {
        return <NavLarge />
      }
    }

    return (
      <div className="App">
          <BrowserRouter>
            <UserContextProvider>
              <LanguageContextProvider>
                {headerForWidth()}
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/lionwood" component={Lionwood} />
                  <Route path="/collaborations" component={Collaborations} />
                  <Route path="/blogcreate" component={BlogCreate} />
                </Switch>
              </LanguageContextProvider>
            </UserContextProvider>
          </BrowserRouter>
        
      </div>
    )
}
