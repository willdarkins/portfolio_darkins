import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import { Icon } from '@iconify/react';

const HomeStyles = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

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
                    <div className='icon'>
                        <LinkedinIcon style={{ fontSize: 40 }} />
                    </div>
                    <div className='icon' >
                        <GitHubIcon style={{ fontSize: 40 }} />
                    </div>
                    <div className='icon'>
                    <Icon icon="mdi:vimeo" style={{ fontSize: 40 }} />
                    </div>
                </div>
            </div>
        </HomeStyles>
    )
}

export default HomePage

