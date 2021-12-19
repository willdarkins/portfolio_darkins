import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Nav'
// import Home from "./pages/home";
import About from './components/About';
import Projects from "./components/Projects";
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Navbar>
          <Routes>
            <Route exact path="/about" element={About} />
            <Route exact path="/projects" element={Projects} />
          </Routes>
        </Navbar>
        <main className='App-header'>
        </main>
      </>
    </Router>
  );
}

export default App;
