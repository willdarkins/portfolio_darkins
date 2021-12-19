import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Nav'
// import Home from "./pages/home";
import About from './components/About';
import Projects from "./components/Projects";
import './App.css';
import { Switch } from '@material-ui/core';

function App() {
  return (
    <>
      <Router>
        <Navbar />
      <main className='App-header'>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </main>
      </Router>
    </>

  );
}

export default App;
