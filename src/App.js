import React from 'react';
import About from './components/About';
import './App.css';
import Button from '@mui/material/Button'

function App() {
  return (
    <>
      <main>
        <About />
        <Button>
          Meet Me, Bro!
        </Button>
      </main>
    </>
  );
}

export default App;
