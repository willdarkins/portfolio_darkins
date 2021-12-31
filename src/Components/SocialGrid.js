import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    .grid-item{
        .post-content{
            display: block;
            position: relative;
            img{
                width: 100%;
            }
            ul{
                display: none;
            }
            .post-image{
                &::before{
                    content: '';
                    position: absolute;
                    left: 2%;
                    top: 2%;
                    height: 0;
                    width: 0;
                    transition: all .4s ease-in-out;
                }
            }
            .post-image:hover{
                ul{
                    display: block;
                    position: absolute;
                    left: 50%;
                    left: 30%;
                    transform: translate(-50%,-50% );
                }
                &::before{
                    height: calc(100% - 5%);
                    width: calc(100% - 5%);
                    background-color: white;
                    opacity: .9;
                    transform-origin: left;
                    transition: all .4s ease-in-out;
                }
            }
        }
    }

`

function SocialGrid({ post }) {
    return (
        <SocialStyles>
            {
                post.map((i) => {
                    return <div className='grid-item' key={i.id}>
                        <div className='post-content'>
                            <div className='post-image'>
                                <img src={i.image} alt='' />

                                <ul>
                                    <li>
                                        <a href={i.link} target='_blank' rel='noopener noreferrer'>
                                            <InstagramIcon />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                })
            }
        </SocialStyles>
    )
}

export default SocialGrid
