import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../partials/Header';
import Home from '../partials/Home';
import About from '../partials/About';
import Contact from '../partials/Contact';
import Error404 from '../partials/Error404';
import FooterElement from '../partials/Footer';

function App() {
  return (
    <Router>

        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error404} />  
        </Switch>

        {/* <FooterElement /> */}

    </Router>
  );
}

export default App;
