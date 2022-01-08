import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Switch from '@mui/material/Switch';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';
import { useEffect } from 'react';

// styles variable from styled-components dependency applied to SideBar
const BarStyles = styled.div`
    background-color: var(--sidebar);
    text-align: center;
    position: fixed;
    width: 16.5rem;
    height: 100vh;
    font-size: 50rem;
    overflow: hidden;
    transition: all .3s ease-in-out;
    .light-dark-mode{
        position: absolute;
        right: 30%;
        top: 32%;
        background: #004b69;
        border-radius: 20%;
        width: 6.5rem;
        height: 2.5rem;
        z-index: 15;
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
            display: flex;
            align-items: center;
        }
    }
    @media screen and (max-width: 1200px){
      transform: translateX(-100%)
    }
`

function SideBar({navToggle }) {
    const [darkMode, setDarkMode] = useState(false);
    const [checked, setChecked] = useState(false)
  
    useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      setChecked(true)
    } else {
      document.body.classList.remove("dark-theme");
      setChecked(false)
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);


    return (
        <BarStyles className= {`${navToggle ? 'navToggle' : ''}`}>
            <div className='light-dark-mode'>
                <div className='left-content'>
                    <DarkModeIcon />
                </div>
                <div className='right-content'>
                    <Switch
                        value=''
                        checked={checked}
                        inputProps={{ 'aria-label': 'controlled' }}
                        size='large'
                        onClick={() => setDarkMode(!darkMode)}
                    />
                </div>
            </div>
            <Nav />
        </BarStyles>
    )
}

export default SideBar
