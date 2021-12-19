import React from 'react'

function Nav() {
    //Instead of just listing each category's name, we'll create objects that contain each category's name and a short description
    const categories = [
        {
            name: "Front-End",
            description: "Full stack web projects featuring simple, elegant designs"
        },
        {
            name: "Back-End",
            description: "CLI applications geared towards functionality for CMS projects"
        },
        {
            name: "Radio",
            description: "Samples of my weekly sports radio show in Portland, OR"
        }
    ]
    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="Waving Hand"> 👋</span> WD
                </a>
            </h2>
            <nav>
                <ul>
                    <li>
                        <a href='#about'>
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>
                            Contact
                        </span>
                    </li>
                    {categories.map((category) => {
                        <li key={category.name}>
                            <span onClick={categorySelected}>
                                {category.name}
                            </span>
                        </li>
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Nav


