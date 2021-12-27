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
        font-size: 1.2rem;
    }
/* root pseudo class to create variables across styles */
    :root {
        --background: #2e344e;
        --background-dark: #10121a;
        --background-light: #f1f1f1;
        --font-dark: #313131;
        --font-dark-v2: #151515;
        --font-light: #F9F6EE;
        --sidebar: #002838;
        --border: #0ea84c;
        --primary: #007bff;
        --secondary: #6c757d;
    }

    body {
        color: var(--font-light);
        background-color: var(--background-color)
    }

    a {
        font-family: inherit;
        color: inherit;
        font-size: inherit;
    }
`
export default GlobalStyle