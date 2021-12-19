import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Nav'
// import Home from "./pages/home";
import About from './components/About';
import Projects from "./components/Projects";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar>
          <Routes>
            <Route path="/about" component={<About />} />
            <Route path="/projects" component={<Projects />} />
          </Routes>
        </Navbar>
      </Router>
      <main className='App-header'>
        <Projects />
        <About />
      </main>
    </>
  );
}

export default App;
