import React from 'react'
import styled from 'styled-components'
import Particles from 'react-tsparticles'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import { Icon } from '@iconify/react';
import Background from '../Images/home-background.jpg'
import particlesConfig from '../Config/particle-config'

//styles variable from styled-components dependency applied to HomePage component
const HomeStyles = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

//targeting intro portion of page with text and icons
    .intro{
        position: absolute;
        width: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        font-size: 1rem;
        
        h1{
            padding-bottom: 2rem;
        }
        p{
            color: var(--background-dark);
        }
        .icon-list{
            display: flex;
            justify-content: center;
            padding-top: 2rem;
            .icon{
                cursor: pointer;
                padding: 0 1rem 0 1rem; 
                color: var(--background-dark);
                align-items: center;
                display: flex;
                justify-content: center;
                transition: all .5s ease-in-out;
                &:hover{
                    color: var(--border)
                }
            }
        }
    }
`
function HomePage() {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <HomeStyles>
            <div className='intro'>
                <h1>👋 Hi there! I'm <span>Will Darkins</span></h1>
                <p>
                    This is some bullshit information about me and things that I do so people will think I know
                    what I'm doing on daily basis. This blurb will go on three more times. This is some bullshit information about me and things that I do so people will think I know
                    what I'm doing on daily basis. This blurb will go on three more times. This is some bullshit information about me and things that I do so people will think I know
                    what I'm doing on daily basis. This blurb will go on three more times. This is some bullshit information about me and things that I do so people will think I know
                    what I'm doing on daily basis. This blurb will go on three more times.
                </p>
                <div className='icon-list'>
                    <a href='https://www.linkedin.com/in/will-darkins-827368b2/' className='icon' target="_blank" >
                        <LinkedinIcon style={{ fontSize: 40 }} />
                    </a>
                    <a href='https://github.com/willdarkins' className='icon' target="_blank">
                        <GitHubIcon style={{ fontSize: 40 }} />
                    </a>
                    <a href='https://vimeo.com/user156064740' className='icon' target="_blank">
                        <Icon icon="mdi:vimeo" style={{ fontSize: 40 }} />
                    </a>
                </div>
            </div>
        </HomeStyles>
    )
}

export default HomePage

