import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Skills from './components/Skills'
import Educations from './components/Educations';
import Porfolios from './components/Porfolios'
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import HtmlEditor from './components/html_editor/Html_editor';
import Contactme from './components/Contactme';


function App() {
  return (

    <Router>
      <Navbar/>
      <Route exact path='/' component={Home}/>
      <Switch >
        <Route path='/skills' component={Skills}/>
        <Route path='/educations' component={Educations}/>
        <Route path='/porfolios' component={Porfolios}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/html_editor' component={HtmlEditor}/>
        <Route path='/contactme' component={Contactme}/>
      </Switch>      
    </Router>
  );
}

export default App;
