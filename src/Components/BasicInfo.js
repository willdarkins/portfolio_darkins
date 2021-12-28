import React from 'react'
import styled from 'styled-components'
import profile from '../Images/Profile-Pic.jpg'

const InfoStyles = styled.div`
    display: flex;
    margin-top: 4.5rem;
    .img-content{
        width: 100%;
        img{
            width: 92%;
        }
    }
    .descrip-content
    h4{
        font-size: 2rem;
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

        .info-title, .info{
            p{
                padding: .2rem 0;
                color: var(--font-dark);
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
                    This is some bullshit information about me and things that I do so people will think I know
                    what I'm doing on daily basis. This blurb will go on three more times. This is some bullshit.
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
                        <p>:  William Darkins</p>
                        <p>:  33</p>
                        <p>:  Portland, OR</p>
                        <p>:  Oregon State University</p>
                        <p>:  Digital Content Director</p>
                        <p>:  Impeccable Edward James Olmos impression </p>
                    </div>
                </div>
            </div>
        </InfoStyles>
    )
}
export default BasicInfo
