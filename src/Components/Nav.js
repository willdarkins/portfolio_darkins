import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import profile from '../Images/Profile-Pic.jpg'

// styles variable from styled-components dependency applied to Nav
const NavStyles = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 2px solid var(--border);

    .profile {
        width: 90%;
        padding: 3rem 0;
        text-align: center;
        img {
            width: 80%;
            border-radius: 35%;
            border: 4px solid var(--border)
        }
    .list-items
    }
`

function Nav() {
    return (
        <NavStyles>
            <div className='profile'>
                <img src={profile} alt='profile photo' />
            </div>
            <ul className='nav-list'>
                <li className='list-items'>
                    <NavLink to='/home' activeClassName='active-class'>Home</NavLink>
                </li>
                <li className='list-items'>
                    <NavLink to='/about' activeClassName='active-class'>About</NavLink>
                </li>
                <li className='list-items'>
                    <NavLink to='/portfolio' activeClassName='active-class'>Portfolio</NavLink>
                </li>
                <li className='list-items'>
                    <NavLink to='/resume' activeClassName='active-class'>Resume</NavLink>
                </li>
                <li className='list-items'>
                    <NavLink to='/social' activeClassName='active-class'>Social</NavLink>
                </li>
                <li className='list-items'>
                    <NavLink to='/podcasting' activeClassName='active-class'>Podcasting</NavLink>
                </li>
                <li className='list-items'>
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