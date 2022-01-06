import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from './Components/SideBar'
import HomePage from './Pages/HomePage'
import About from './Pages/AboutPage.js'
import Portfolio from './Pages/PortfolioPage.js'
import ResumePage from './Pages/ResumePage.js';
import Social from './Pages/SocialPage.js';
import Podcasting from './Pages/PodcastingPage.js';
import Contact from './Pages/ContactPage.js';
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion';


//styles to be applied to main content section on the app... this is everything but the SibeBar and Nav
const MainStyles = styled.main`
    position: relative;
    margin-left: 16rem;
    min-height: 100vh;
    .p-particles-js{
        position: absolute;
        top: 0;
        left: 0;
    }
`
function App() {

    return (
        <>
            <Router forceRefresh>
                <SideBar />
                <MainStyles>
                    <AnimatePresence exitBeforeEnter>
                        <Switch>
                            <Route exact path='/' component={HomePage} />
                            <Route exact path='/about' component={About} />
                            <Route exact path='/portfolio' component={Portfolio} />
                            <Route exact path='/resume' component={ResumePage} />
                            <Route exact path='/social' component={Social} />
                            <Route exact path='/podcasting' component={Podcasting} />
                            <Route exact path='/contact' component={Contact} />
                        </Switch>
                    </AnimatePresence>
                </MainStyles>
            </Router>
        </>
    )
}



export default App
