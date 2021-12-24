import React, { useState } from 'react';
import './assets/index.css';
import About from './components/About';
import Navbar from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
// import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

function App() {
    const [categories] = useState([
        {
            name: "front-end",
            description: "List of projects utilizing knowledge of front-end frameworks and programming languages.",
        },
        {
            name: "back-end",
            description: "List of projects emphasizing knowlege in data managment and server implementation.",
        },
        {
            name: "social-media",
            description: "Attention getting grphics created to promote Portland Sports Radio brand.",
        },
        {
            name: "podcasting",
            description: "Sound clips from my weekend sports radio show on KFXX-AM ESPN Sports Radio 1080 The FAN.",
        },
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0])
    return (
        <>
            <Navbar
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}>
            </Navbar>
            <main>
                <ContactForm />
                <Gallery currentCategory={currentCategory}></Gallery>
                <About />
            </main>
        </>
    );
}

export default App;