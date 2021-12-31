import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import profile from '../Images/Profile-Pic.jpg'

//styles variable from styled-components dependency applied to Nav
const NavStyles = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    box-shadow: 5px 4px 10px #888888;

//targeting profile picture in sidebar
    .profile {
        width: 90%;
        padding: 1rem 0;
        text-align: center;
        img {
            width: 71%;
            border-radius: 35%;
            border: 4px solid var(--border)
        }
    }
    .list-item{
        padding-top: 1rem;
    }
    a {
    background:
        linear-gradient(
        to bottom,
        var(--border) 0%,
        var(--border) 100%
        );
	background-position: 0 100%;
	background-repeat: repeat-x;
	background-size: 4px 4px;
    color: var(--font-light);
    text-decoration: none;
    transition: background-size .8s;
    }

    a:hover {
  background-size: 4px 50px;
    }
    
    footer {
        p {
            padding: 1rem 0;
            font-size: 1.2rem;
            display: block;
            text-align: center;
        }
        border-top: 1px solid var(--border);
    }
`

function Nav() {
    return (
        <NavStyles>
            <div className='profile'>
                <img src={profile} alt='profile photo' />
            </div>
            <ul className='nav-list'>
                <li className='list-item'>
                    <NavLink className={'menu-item'} exact to='/' activeClassName='active-class'>Home</NavLink>
                </li>
                <li className='list-item'>
                    <NavLink className={'menu-item'} exact to='/about' activeClassName='active-class'>About</NavLink>
                </li>
                <li className='list-item'>
                    <NavLink className={'menu-item'} exact to='/resume' activeClassName='active-class'>Resume</NavLink>
                </li>
                <li className='list-item'>
                    <NavLink className={'menu-item'} exact to='/portfolio' activeClassName='active-class'>Portfolio</NavLink>
                </li>
                <li className='list-item'>
                    <NavLink className={'menu-item'} exact to='/social' activeClassName='active-class'>Social</NavLink>
                </li>
                <li className='list-item'>
                    <NavLink className={'menu-item'} exact to='/podcasting' activeClassName='active-class'>Podcasting</NavLink>
                </li>
                <li className='list-item'>
                    <NavLink className={'menu-item'} exact to='/contact' activeClassName='active-class'>Contact</NavLink>
                </li>
            </ul>
        <footer className='footer'>
        <p>Will Darkins - 2021</p>
        </footer>
        </NavStyles>
    )
}

export default Nav