import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from "./components/Contact/Contact";
import Cards from './components/Projects/Cards/Cards';
import Books from './components/Projects/Books/Books';
import Contributor from './components/Projects/Contributor/Contributor';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/projects' exact component={Projects}/>
          <Route path='/about-me' component={AboutMe}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/cards' component={Cards}/>
          <Route path='/books' component={Books}/>
          <Route path='/contributor' component={Contributor}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
