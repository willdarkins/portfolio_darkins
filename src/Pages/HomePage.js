import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const pageTransitions = {
    initial: { opacity: 0, x: 100, y: "-50%" },
    animate: { opacity: 1, x: "-50%", y: "-50%" },
    exit: { opacity: 0, x: -100, y: "-50%" }
}

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
        @media screen and (max-width: 600px){
            h1{
                font-size: 2.8rem;
            }
            span{
                font-size: 2.8rem;
            }
        }
        
        h1{
            padding-bottom: 2rem;
            color: var(--font-dark);
        } 
        p{
            color: var(--font-dark);
        }
        .icon-list{
            display: flex;
            justify-content: center;
            padding-top: 2rem;
            .icon{
                cursor: pointer;
                padding: 0 1rem 0 1rem; 
                color: var(--font-dark);
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
            <motion.div
                exit="exit"
                animate="animate"
                initial="initial"
                variants={pageTransitions}
                transition={{ duration: 0.8 }}
                className='intro'>
                <div className='intro'>
                    <h1>👋 I'm Will! <span>Creating is My Thing</span></h1>
                    <p>
                    I've been in the business of making things my entire adult life. Whether it was creating cirtical television segments, writing/producing engaging radio commercials or
                    developing full-stack web applications, I've never stopped learning and pushing personal creative boundries. My specialty is front-end REACT focused web-design, creating 
                    engaging visual posts for Instagram and effectivley communicating project goals. I'm excited for you check out my work!
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
            </motion.div>
        </HomeStyles>

    )
}

export default HomePage

