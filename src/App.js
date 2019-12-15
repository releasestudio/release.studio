import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route,} from 'react-router-dom';
import './App.css';
import NavLarge from './Components/Nav/NavLarge';
import NavNarrow from './Components/Nav/NavNarrow';
import BlogEditPage from './Components/BlogEditPage/BlogEditPage'
import Home from './Components/Home/Home';
import Lionwood from './Components/Lionwood/Lionwood';
import BlogPage from './Components/BlogPage/BlogPage.js';
import {ContextProvider} from './Context';

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
            <ContextProvider>
                {headerForWidth()}
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/lionwood" component={Lionwood} />
                  <Route path="/Showreel" component={BlogPage} />
                  <Route path="/blogeditpage" component={BlogEditPage} />
                </Switch>
            </ContextProvider>
          </BrowserRouter>
        
      </div>
    )
}
