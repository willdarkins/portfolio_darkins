import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import SideBar from './Components/SideBar'
import HomePage from './Pages/HomePage'
import About from './Pages/AboutPage.js'
import Portfolio from './Pages/PortfolioPage.js'
import ResumePage from './Pages/ResumePage.js';
import Social from './Pages/SocialPage.js';
import Contact from './Pages/ContactPage.js';
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@material-ui/core';



//styles to be applied to main content section on the app... this is everything but the SibeBar and Nav
const MainStyles = styled.main`
    position: relative;
    margin-left: 16rem;
    min-height: 100vh;
    @media screen and (max-width: 1200px){
        margin-left: 0;
    }
    .p-particles-js{
        position: absolute;
        top: 0;
        left: 0;
    }
`
function App() {
const location = useLocation()
const [navToggle, setNavToggle] = useState(false);
    return (
        <>
            <Router forceRefresh>
                <SideBar />
                <div className='menu-burger'>
                    <IconButton onClick={() => setNavToggle(!navToggle)}>
                        <MenuIcon />
                    </IconButton>
                </div>
                <MainStyles>
                    <AnimatePresence exitBeforeEnter>
                        <Switch location={location} key={location.pathname}>
                            <Route exact path='/' component={HomePage} />
                            <Route exact path='/about' component={About} />
                            <Route exact path='/portfolio' component={Portfolio} />
                            <Route exact path='/resume' component={ResumePage} />
                            <Route exact path='/social' component={Social} />
                            <Route exact path='/contact' component={Contact} />
                        </Switch>
                    </AnimatePresence>
                </MainStyles>
            </Router>
        </>
    )
}



export default App
