import React from 'react';
import {BrowserRouter, Switch, Route,} from "react-router-dom";
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Lionwood from './Components/Lionwood/Lionwood';
import Collaborations from './Components/Collaborations/Collaborations';
import UserContext from './LanguageContext';

export default function App(props){

    return (
      <div className="App">
          <BrowserRouter>
            <UserContext.Provider value="fr">
              <Nav />
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/Lionwood" component={Lionwood} />
                <Route path="/Collaborations" component={Collaborations} />
              </Switch>
            </UserContext.Provider>
          </BrowserRouter>
        
      </div>
    )
}
