
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Skills from './components/resume/Skills'
import Educations from './components/resume/Educations';
import Porfolios from './components/resume/Porfolios'
import Navbar from './components/Navbar';
import Projects from './components/resume/Projects';
import HtmlEditor from './components/html_editor/Html_editor';
import Contactme from './components/resume/Contactme';
import ToDoApp from './components/TodoApp/TodoApp';
import ColorPicker from './components/color_picker/ColorPicker';
import MemoriesApp from './components/memories/MemoriesApp'
import ExpenseTracker from './components/ExpenseTracker/ExpenseTracker'


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
        <Route path='/todolist' component={ToDoApp}/>
        <Route path='/color_picker' component={ColorPicker}/>
        <Route path='/memories' component={MemoriesApp} />
        <Route path='/expense_tracker' component={ExpenseTracker} />
      </Switch>      
    </Router>
  );
}

export default App;
