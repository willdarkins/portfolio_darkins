import React, {useState} from 'react'
import gif from '../../assets/GIFS/tech-blog.gif'

function GifList() {
    const [gifs] = useState([
        {
          name: 'employee-tracker',
          category: 'project',
          description: 'A content managment system geared towards helping small business owners view and manage employee data counter to departments, roles, id\'s and salaries.',
        },
        {
          name: 'javascript-quiz',
          category: 'project',
          description: 'A timed quiz that will test knowledge of basic vanilla JavaScript concepts, and track high scores to measure improvement against peers.',
        },
        {
          name: 'note-taker',
          category: 'project',
          description: 'An application geared towards helping small business owners write and save digital notes. The functionality allows users to better organize thoughts and keep track of daily tasks in a simple, easy to navigate UI.',
        },
        {
          name: 'team-builder',
          category: 'project',
          description: 'A command line interface focused application that allows managers to easily display basic information about team members, including email and Github repositories, for quick reference on the job.',
        },
        {
          name: 'tech-blog',
          category: 'project',
          description: 'A full stack CMS style blog site that allows developers to publish articles, write blog posts and express general thoughts on the computer science industry, while using a simple and attractive UI.',
        },
        {
          name: 'weather-dashboard',
          category: 'project',
          description: 'An application that presents an obvious search bar to find the current and future weather forecasts for various citites',
        }
      ]);
    return (
        <>
        <img src={gif} alt='GIF example' />
        </>
    )
}

export default GifList
