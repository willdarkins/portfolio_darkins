import React from 'react'
import ProfilePic from '../../assets/ProfilePic.jpg'
function About() {
    return (
        <>
            <section className="my-5">
                <h1 id="about">Who am I?</h1>
                <img src={ProfilePic} className='my-2' style={{ width: '30%' }} alt='cover' />
            </section>
        </>
    )
}

export default About
