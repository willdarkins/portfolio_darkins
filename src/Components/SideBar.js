import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'

// styles variable from styled-components dependency applied to SideBar
const BarStyles = styled.div `
    background-color: var(--sidebar);
    position: fixed;
    width: 16.5rem;
    height: 100vh;

`

function SideBar() {
    return (
        <BarStyles>
        <Nav />
        </BarStyles>
    )
}

export default SideBar
