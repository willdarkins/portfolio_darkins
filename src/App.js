import React from 'react'
import SideBar from './Components/SideBar'
import HomePage from './Pages/HomePage'
import styled from 'styled-components'

//styles to be applied to main content section on the app... this is everything but the SibeBar and Nav
const MainStyles = styled.main `
    position: relative;
    margin-left: 16rem;
    min-height: 100vh;

    .lines{
        position: absolute;
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        .line-1, .line-2, .line-3, .line-4{
            width: 1px;
            min-height: 100vh;
            background-color: red;
        }
    }

`
function App() {
    return (
        <>
        <SideBar /> 
        <MainStyles>

        <HomePage />
        </MainStyles>
        
        </>
    )
}



export default App
