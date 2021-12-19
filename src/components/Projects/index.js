import React from 'react'

function Projects(props) {
    const currentCategory = {
        name: "Front-End",
        description: "Full stack web projects featuring simple, elegant designs"
    }
    return (
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.description}</p>
        </section>
    )
}

export default Projects
