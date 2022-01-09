import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import Title from './Title'
import ServiceCard from '../Components/ServiceCard'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PodcastsIcon from '@mui/icons-material/Podcasts';

const SkillStyles = styled.section`
    .services{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        margin-top: 3rem;
        color: var(--font-dark);
        @media screen and (max-width: 1000px){
            flex-direction: column;

    }
        @media screen and (max-width: 950px){
            grid-template-columns: repeat(2, 1fr);
    }
        @media screen and (max-width: 650px){
            grid-template-columns: repeat(1, 1fr);
    }
        svg{
            color: var(--font-dark);
        }
        .first-card{
            button{
                display: none;
            }
        }
        .mid-card{
            button{
                display: none;
            }
        }
        .last-card{
            button{
            }
        }
    }
`
const develop = <DeveloperBoardIcon />
const design = <DesignServicesIcon />
const podcast = <PodcastsIcon />

function Skills() {
    return (
        <InnerLayout>
            <SkillStyles>
                <Title title={'Skills'} />
                <div className='services'>
                    <div className='first-card'>
                    <ServiceCard
                        icon={develop}
                        title={'Full-Stack Development'}
                        paragraph={' Extensive experience in writing HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS. '}
                    /> 
                    </div>
                    <div className='mid-card'>
                        <ServiceCard
                            icon={design}
                            title={'Graphic Design'}
                            paragraph={' Five years experience using Adobe Photoshop and other pixel editing software to create engaging banners & social posts for companies. '}
                        />
                    </div>
                    <div className='last-card'>
                    <ServiceCard
                        button={'LISTEN!'}
                        icon={podcast}
                        title={'Podcasting/Audio Design'}
                        paragraph={' Producer/Host of sports radio show airing Saturday morning. Experience using DAW software to produce podcasts, commercials and audio vignettes '}
                    />
                    </div>
                </div>
            </SkillStyles>
        </InnerLayout>
    )
}

export default Skills
