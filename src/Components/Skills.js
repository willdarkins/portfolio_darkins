import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import Title from './Title'
import ServiceCard from '../Components/ServiceCard'
import fullstack from '../Images/fullstack.svg'
import photoshop from '../Images/photoshop.svg'
import microphone from '../Images/podcasting.svg'

const SkillStyles = styled.section`
    .services{
        display: flex;
        justify-content: space-between;
        margin-top: 3rem;
        color: var(--font-dark);
        .mid-card{
            margin: 0 1.2rem;
        }
    }
`

function Skills() {
    return (
        <InnerLayout>
            <SkillStyles>
                <Title title={'Skills'} />
                <div className='services'>
                    <ServiceCard
                        image={fullstack}
                        title={'Full-Stack Development'}
                        paragraph={' This is some bullshit information about me and things that I do so people will think I know This is some bullshit information about me and things that I do so people will think I know'}
                    />
                    <div className='mid-card'>
                        <ServiceCard
                            image={photoshop}
                            title={'Photoshop'}
                            paragraph={' This is some bullshit information about me and things that I do so people will think I know This is some bullshit information about me and things that I do so people will think I know'}
                        />
                    </div>
                    <ServiceCard
                        image={microphone}
                        title={'Podcasting/Audio Design'}
                        paragraph={' This is some bullshit information about me and things that I do so people will think I know This is some bullshit information about me and things that I do so people will think I know'}
                    />
                </div>
            </SkillStyles>
        </InnerLayout>
    )
}

export default Skills
