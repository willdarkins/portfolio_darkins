import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import profile from '../Images/Profile-Pic.jpg'


const NavStyles = styled.nav`

`

function Nav() {
    return (
        <NavStyles>
            <div className='profile'>
                <img src={profile} alt='profile photo' />
            </div>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <NavLink to='/home' activeClassName='active-class'>Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/about' activeClassName='active-class'>About</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/portfolio' activeClassName='active-class'>Portfolio</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/resume' activeClassName='active-class'>Resume</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/social' activeClassName='active-class'>Social</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/podcasting' activeClassName='active-class'>Podcasting</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/contact' activeClassName='active-class'>Contact</NavLink>
                </li>
            </ul>
        <footer className='footer'>
        @2021 Will Darkins
        </footer>
        </NavStyles>
    )
}

export default Nav