import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education';
import Porfolios from './components/Porfolios'
import Navbar from './components/Navbar';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Route exact path='/' component={Home} />
        <Switch>
            <Route path='/skills' component={Skills} />
            <Route path='/educations' component = {Education} />
            <Route path='/experience' component={Experience} />
            <Route path='/porfolios' component = {Porfolios} />
        </Switch>
    </Router>   
  );
}

export default App;
