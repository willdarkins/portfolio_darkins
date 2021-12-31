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

    .light-dark-mode{
        position: absolute;
        right: 30%;
        top: 30%;
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
`

function SideBar() {
    const [theme, setTheme] = useState('light-theme');
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        //adds the conditional light or dark theme class to the root <html> in order to render certain styles
        document.documentElement.className = theme;
    }, [theme])

    const darkToggler = () => {
        if(theme === 'dark-theme'){
            setTheme('light-theme')
            setChecked(false)
        } else{
            setTheme('dark-theme')
            setChecked(true)
        }
    }

    return (
        <BarStyles>
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
                        onClick={darkToggler}
                    />
                </div>
            </div>
            <Nav />
        </BarStyles>
    )
}

export default SideBar
