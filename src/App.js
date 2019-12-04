import React from 'react';
import {BrowserRouter, Switch, Route,} from "react-router-dom";
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Lionwood from './Components/Lionwood/Lionwood';
import Collaborations from './Components/Collaborations/Collaborations'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Lionwood" component={Lionwood} />
          <Route path="/Collaborations" component={Collaborations} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
