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
        }
    } 
`

function SocialGrid({post}) {
    return (
        <SocialStyles>
            {
                post.map((i) => {
                    return <div className='grid-item' key={i.id}>
                        <div className='post-content'>
                            <div className='post-image'>
                                <img src={i.image} alt='' />
                            </div>
                            <ul>
                                <li>
                                <a href={i.link}>
                                    <InstagramIcon />
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                })
            }
        </SocialStyles>
    )
}

export default SocialGrid
