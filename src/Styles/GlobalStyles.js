// file to set gloabal styles throughout the entire app using styled-components dependency
import { createGlobalStyle } from "styled-components";

// global styles Component
const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
        font-family: 'Work Sans', sans-serif;
        font-size: 1rem;
    }
/* root pseudo class to create variables across styles */
:root {
        --background: #ffffff;
        --background-dark: #000f14;
        --background-light: #f1f1f1;
        --font-dark: #151515;
        --font-dark-v2: #151515;
        --font-light: #f9f6ee;
        --sidebar: #002838;
        --border: #0ea84c;
        --primary: #007bff;
        --secondary: #6c757d;
        --blue: #247cc4;
	    --white: #ffffff;
	    --dark-card: #ffffff
    }
    .light-theme {
        --background: #ffffff;
        --background-dark: #000f14;
        --background-light: #f1f1f1;
        --font-dark: #151515;
        --font-dark-v2: #151515;
        --font-light: #f9f6ee;
        --sidebar: #002838;
        --border: #0ea84c;
        --primary: #007bff;
        --secondary: #6c757d;
        --blue: #247cc4;
	    --white: #ffffff;
	    --dark-card: #ffffff
    }

    .dark-theme{
        --background: #000f14;
        --background-dark: #000f14;
        --background-light: #f1f1f1;
        --font-dark: #ebf1ff;
        --font-dark-v2: #151515;
        --font-light: #ebf1ff;
        --sidebar: #002838;
        --border: #0ea84c;
        --primary: #007bff;
        --secondary: #6c757d;
        --blue: #247cc4;
        --white: #ffffff;
        --dark-card: #002838
    }

    body {
        color: var(--font-light);
        background-color: var(--background)
    }

    a {
        font-family: inherit;
        color: inherit;
        font-size: inherit;
        font-size: 1.7rem;
    }
    h1{
        font-size: 3rem;
        color: var(--background-dark);
        span{
            color: var(--blue);
            font-size: 3rem; 
        }
    }
    h6{
        font-size: 1.2rem;
        color: var(--font-dark);
        padding-bottom: .6rem;
    }
    .menu-burger{
        position: absolute;
        right: 5%;
        top: 3%;
        z-index: 15;
        svg{
            font-size: 3rem;
            color: var(--blue);
            }
        }
    .nav-toggle{
        transform: translateX(0);
        z-index: 20;
    }
    @media screen and (max-width: 1200px){

    }


`
export default GlobalStyle