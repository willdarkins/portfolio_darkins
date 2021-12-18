import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <>
    <Nav />
      <main className='App-header'>
        <About />
      </main>
    </>
  );
}

export default App;
