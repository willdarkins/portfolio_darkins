import React from 'react'
import styled from 'styled-components'
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
        button{
                cursor: pointer;
                display: inline-block;
                padding:0.3em 1.2em;
                margin:0 0.3em 0.3em 0;
                border-radius:2em;
                box-sizing: border-box;
                text-decoration:none;
                color:#FFFFFF;
                background-color:#4eb5f1;
                text-align:center;
                transition: all 0.2s;
                font-family:'Roboto',sans-serif;
                font-weight: bold;
                border: none;
            }
            button:hover{
                background-color:#4095c6;
            }
            a{
                font-size: 1rem;
                text-decoration: none;
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
        padding: .8rem 0
    }
`
//passing props for info that will be displayed on each of the core skills listed on the About Page
function ServiceCard({ icon, title, paragraph, button }) {
    return (
        <motion.div
            whileHover={{
                scale: 1.15,
                transition: {
                    duration: .3
                }
            }}
            className='container'>
            <CardStyles>
                <div className='container'>
                    <p>{icon}</p>
                    <h4>{title}</h4>
                    <p>{paragraph}</p>
                    <button><a href='https://www.audacy.com/1080thefan/podcasts/the-sinner-and-the-saint-20360' target='_blank' rel='noopener noreferrer'>{button}</a></button>
                </div>
            </CardStyles>
        </motion.div>
    )
}

export default ServiceCard
