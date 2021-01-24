import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from "./components/Contact/Contact";
import Contributor from './components/Projects/Contributor/Contributor';
import CardsComponent from './components/Projects/Cards/CardsComponent';
import CardsDetail from './components/Projects/Cards/CardsDetails';
import Books from './components/Projects/Books/Books';
import ContributorDetail from "./components/Projects/Contributor/ContributorDetail";

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
          <Route path='/cards' exact component={CardsComponent}/>
          <Route path='/books' component={Books}/>
          <Route path='/contributor' exact component={Contributor}/>
          <Route path='/contributor-detail/:id' exact component={ContributorDetail}/>
          <Route path='/cards/:id' component={CardsDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
