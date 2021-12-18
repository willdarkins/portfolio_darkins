import React from 'react';
import About from './components/About';
import './App.css';
import Button from '@mui/material/Button'

function App() {
  return (
    <>
      <main className='App-header'>
        <About />
        <Button
        onClick={() => alert('Fuck You')} 
        variant='contained' 
        color='secondary'
        size='large'>
          Meet Me, Bro!
        </Button>
      </main>
    </>
  );
}

export default App;
