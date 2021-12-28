import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from './Components/SideBar'
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Resume from './Pages/Resume';
import Social from './Pages/Social';
import Podcasting from './Pages/Podcasting';
import Contact from './Pages/Contact';

import styled from 'styled-components'

//styles to be applied to main content section on the app... this is everything but the SibeBar and Nav
const MainStyles = styled.main`
    position: relative;
    margin-left: 16rem;
    min-height: 100vh;

`
function App() {
    return (
        <>
            <Router forceRefresh>
                <SideBar />
                <MainStyles>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/portfolio' component={Portfolio} />
                        <Route exact path='/resume' component={Resume} />
                        <Route exact path='/social' component={Social} />
                        <Route exact path='/podcasting' component={Podcasting} />
                        <Route exact path='/contact' component={Contact} />
                    </Switch>
                </MainStyles>
            </Router>
        </>
    )
}



export default App
