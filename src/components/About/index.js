import React from "react";
import ProfilePic from "../../assets/ProfilePic.jpg"

function About() {
    return(
        <section>
            <h1>Hi there! I'm Will. </h1>
            <img src={ProfilePic} style={{width:"100%"}} alt= 'cover' />
        </section>
    )
}

export default About