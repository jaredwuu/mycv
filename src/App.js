import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import Educations from './components/Educations';
import Porfolios from './components/Porfolios'
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Route exact path='/' component={Home} />
        <Switch>
            <Route path='/skills' component={Skills} />
            <Route path='/educations' component = {Educations} />
            <Route path='/experiences' component={Experiences} />
            <Route path='/porfolios' component = {Porfolios} />
            <Route path = '/projects' component = {Projects} />
        </Switch>
    </Router>   
  );
}

export default App;
