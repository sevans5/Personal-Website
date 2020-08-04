import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import ScrollToTop from './ScrollToTop';
import Projects from './Projects';
import Vibecheck from './projects/Vibecheck';
import MyWeather from './projects/MyWeather';
import NCFarmsForNCKids from './projects/NCFarmsForNCKids';
import MovieFinder from './projects/MovieFinder';
import Librarier from './projects/Librarier';

import About from './About';
import Navig from './Navig';
import Footer from './Footer';

function App() {
  return (
    <Router>
    <ScrollToTop>
    <div className="App">
      <Navig />
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/vibecheck" component={Vibecheck}/>
        <Route path="/myweather" component={MyWeather}/>
        <Route path="/ncfarmsfornckids" component={NCFarmsForNCKids}/>
        <Route path="/moviefinder" component={MovieFinder}/>
        <Route path="/librarier" component={Librarier}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="/" exact component={Projects}/>
      </Switch>
      <Footer />
    </div>
    </ScrollToTop>
    </Router>
  );
}

export default App;
