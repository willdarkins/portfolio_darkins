import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    .post-image{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .grid-item{
        .post-content{
            display: block;
            position: relative;
            img{
                width: 100%;
            }
            ul{
                transform: translateY(-600px);
                transition: all .3s ease-in-out;
                position: absolute;
                left: 50%;
                top: 50%;
                opacity: 0;
                li{
                        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
                        border-radius: 40px;
                        padding: .3rem;
                        align-items: center;
                        justify-content: center;
                        transition: all .8s ease-in-out;
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }
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
                    transform: translateY(0);
                    transform: translate(-50%,-50% );
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all .4s ease-in-out;
                    opacity: 1;
                    li{
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }
                    li:hover{
                            background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
                        }
                    svg{
                        cursor: pointer;
                        font-size: 6rem;
                    }
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
