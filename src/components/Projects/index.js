import React from 'react'
//helper function to capitalize the name value when it's rendered
import { capitalizeFirstLetter } from '../../utils/helpers'
import GifList from '../GifList'

function Projects({currentCategory}) {
    const {name, description} = currentCategory;
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
                <GifList />
        </section>
    )
}

export default Projects
