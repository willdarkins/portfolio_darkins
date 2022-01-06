import React from 'react'
import styled from 'styled-components'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import { motion } from 'framer-motion';

const CardStyles = styled.div`
    margin: 0 1rem;
    background-color: var(--dark-card) ;
    cursor: pointer;
    .container{
        box-shadow: 5px 10px 18px #888888;
        transition: 0.3s;
        padding: 1.2rem;
        svg{
            font-size: 5rem; 
        }
    }
    .container:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    h4{
        font-size: 1.3rem;
        padding: 1rem 0;
        position: relative;
        &::after{
            content: '';
            width: 4rem;
            background-color: var(--border);
            height: 4px;
            position: absolute;
            left: 0;
            bottom: 0;
            border-radius: 10px;
        }
    }
    p{
        padding: .8rem 0    ;

    }
`
const develop = <DeveloperBoardIcon />
const design = <DesignServicesIcon />
const podcast = <PodcastsIcon />


//passing props for info that will be displayed on each of the core skills listed on the About Page
function ServiceCard({ icon, title, paragraph }) {
    return (
        <motion.div
            whileHover={{
                scale: 1.15,
                transition: {
                    duration: .2
                }
            }}
            className='container'>
            <CardStyles>
                <div className='container'>
                    <p>{icon}</p>
                    <h4>{title}</h4>
                    <p>{paragraph}</p>
                </div>
            </CardStyles>
        </motion.div>
    )
}

export default ServiceCard
