import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <>
    <Nav />
      <main className='App-header'>
        <Projects />
        <About />
      </main>
    </>
  );
}

export default App;
