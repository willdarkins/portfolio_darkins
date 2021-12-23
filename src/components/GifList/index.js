import React, { useState } from 'react';

function GifList({ category }) {
    const [gifs] = useState([
        {
            name: 'javascript-quiz',
            category: 'front-end',
        },
        {
            name: 'note-taker',
            category: 'front-end',
        },
        {
            name: 'tech-blog',
            category: 'front-end',
        },
        {
            name: 'weather-dashboard',
            category: 'front-end',
        },
        {
            name: 'employee-tracker',
            category: 'back-end',
        },
        {
            name: 'team-builder',
            category: 'back-end',
        },
    ]);

    const currentGifs = gifs.filter((gif) => gif.category === category);

    return (
        <>
        <div className="flex-row">
          {currentGifs.map((gif, i) => (
            <img
              src={require(`../../assets/LARGE/${category}/${i}.gif`).default}
              alt={gif.name}
              className="img-thumbnail mx-1"
              key={gif.name}
            />
          ))}
        </div>
      </>
    )
}

export default GifList
