import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import Title from './Title'
import ServiceCard from '../Components/ServiceCard'
import fullstack from '../Images/fullstack.png'
import photoshop from '../Images/photoshop.png'
import microphone from '../Images/microphone.png'

const SkillStyles = styled.section`
`

function Skills() {
    return (
        <InnerLayout>
            <SkillStyles>
                <Title title={'Skills'} />
                <div className='services'>
                    <ServiceCard 

                    title={'Full-Stack Development'}
                    paragraph={' This is some bullshit information about me and things that I do so people will think I know This is some bullshit information about me and things that I do so people will think I know'}
                    />
                </div>
            </SkillStyles>
        </InnerLayout>
    )
}

export default Skills
