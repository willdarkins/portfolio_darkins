import React from 'react'
//helper function to capitalize the name value when it's rendered
import { capitalizeFirstLetter } from '../../utils/helpers'
import logo from '../../assets/GIFS/tech-blog.gif';

function Projects(props) {
    const currentCategory = {
        name: "Front-End",
        description: "Full stack web projects featuring simple, elegant designs"
    }
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <img src={logo} alt="loading..." />
        </section>
    )
}

export default Projects
