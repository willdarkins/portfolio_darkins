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
        <img src= {profile} alt='profile photo' />
        <ul className='nav-list'>
            <li className='nav-item'>
                <NavLink to='/home' activeClassName= 'active-class'>Home</NavLink>
            </li>
        </ul>
            </div>
        </NavStyles>
    )
}

export default Nav