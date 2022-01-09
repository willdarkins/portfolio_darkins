import React from 'react'
import styled from 'styled-components'
import profile from '../Images/Profile-Pic.jpg'
import Button from '@mui/material/Button';

const InfoStyles = styled.div`
    display: flex;
    margin-top: 3rem;
    @media screen and (max-width: 1000px){
        flex-direction: column;
        .img-content{
            margin-bottom: 2rem;
        }
    }   
    .img-content{
        width: 100%;

        img{
            width: 90%;
            object-fit: cover;
        }
    }
    .descrip-content{
        .Button{
            padding-top: 3rem;
            a{
                font-size: 1rem;
            }
        }
    }
    h4{
        font-size: 2.5rem;
        color: var(--font-dark);
    }
    .paragraph{
        padding: 1rem 0;
        color: var(--font-dark);
    }
    .basic-info{
        display: flex;
        .info-title{
            padding-right: .5rem;
            color: var(--font-dark);
            p{
                font-weight: bolder;
            }
        }
    }
    .info-title, .info{
        p{
            padding: .2rem 0;
            color: var(--font-dark);
            @media screen and (max-width: 375px){
            font-size: 7rem
            }
        }
    }
    
`
function BasicInfo() {
    return (
        <InfoStyles>
            <div className='img-content'>
                <img src={profile} alt='at work image' />
            </div>
            <div className='descrip-content'>
                <h4>The Basics...</h4>
                <p className='paragraph'>
                I grew up in the Pacific Northwest during the 2000's. The proliferation of frohawks, MySpace and reality television
                somehow sparked an affinity to mixed media. Most of my 20's and early 30's were spent working in broadcasting and digital media.
                I now excel in full-stack web-development.
                </p>
                <div className='basic-info'>
                    <div className='info-title'>
                        <p>Name</p>
                        <p>Age</p>
                        <p>Location</p>
                        <p>School</p>
                        <p>Postion</p>
                        <p>Special</p>
                    </div>
                    <div className='info'>
                        <p>:    William Darkins</p>
                        <p>:    33</p>
                        <p>:    Portland, OR</p>
                        <p>:    Oregon State University</p>
                        <p>:    Digital Content Director, Audacy Portland</p>
                        <p>:    Impeccable Edward James Olmos impression </p>
                    </div>
                </div>
                <div className='Button'>
                    <Button variant="contained" size="large">
                       <a href='https://docs.google.com/document/d/1uLVe2rlOxss92WbZRckPIwKWaXXrb6mQRbAsTXHgVSE/edit' target='_blank' rel='noopener noreferrer'>
                           View Full CV </a>
                    </Button>
                </div>
            </div>
        </InfoStyles>
    )
}
export default BasicInfo
