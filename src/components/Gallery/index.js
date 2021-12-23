import React from 'react'
// import { capitalizeFirstLetter } from '../../utils/helpers';
import GifList from '../GifList';

function Gallery(props) {
    const { currentCategory } = props;
    return (
        <>
            <section>
                <h1>{currentCategory.name}</h1>
                <p>{currentCategory.description}</p>
                <GifList category={currentCategory.name} />
            </section>
        </>
    )
}

export default Gallery
