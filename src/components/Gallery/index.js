import React from 'react'
// import { capitalizeFirstLetter } from '../../utils/helpers';
import GifList from '../GifList';

function Gallery(currentCategory) {
    const { name, description} = currentCategory
    return (
        <>
            <section>
                <h1>{name}</h1>
                <p>{description}</p>
                <GifList category={currentCategory.name}/>
            </section>
        </>
    )
}

export default Gallery
