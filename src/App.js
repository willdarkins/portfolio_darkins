import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Nav'
import About from './components/About';
import Projects from "./components/Projects";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="App-header">
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>

  );
}

export default App;
