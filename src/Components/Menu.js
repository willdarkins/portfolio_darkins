import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkIcon from '@mui/icons-material/Link';

const MenuStyles = styled.div`
    color: var(--font-dark);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    .portfolio-image{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    ul{
        transform: translateY(-600px);
        transition: all .4s ease-in-out;
        position: absolute;
        left: 50%;
        top: 40%;
        opacity: 0;
    }
    .portfolio-image:hover{
        ul{
        transform: translateY(0);
        display: block;
        transform: translate(-50%,-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .4s ease-in-out;
        opacity: 1;
        li{
            background: var(--border);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            width: 3rem;
            height: 3rem;
            margin: 0 .5rem;
            transition: all .4s ease-in-out;
            border-radius: 50%;
            a{
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all .4s ease-in-out;
            }
        }
        li:hover{
            svg{
                color: var('white');
            }
        }
        svg{
            cursor: pointer;
            color: white;
            font-size: 2rem;
            }
        }
        &::before{

        }
    }
    .grid-item{
        .portfolio-content{
            display: block;
            position: relative;
            overflow: hidden;
            h6{
                font-size: 1.5rem;
                margin-top: 2rem;
            }
            img{
                height: 30vh;
                object-fit: cover;
                width: 100%;
            }
            img{
                cursor: pointer;
                width: 100%;
                transition: filter .5s ease-in-out;
            }
            img:hover{
                filter: blur(5px);
            }
        }
    }
`
function Menu({ menuItem }) {
    return (
        <MenuStyles>
            {
                menuItem.map((item) => {
                    return <div className='grid-item' key={item.id}>
                        <div className='portfolio-content'>
                            <div className='portfolio-image'>
                                <img src={item.image} />
                                <ul>
                                    <li>
                                        <a href={item.link1}>
                                            <GitHubIcon />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={item.link2}>
                                            <LinkIcon />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h6>{item.title}</h6>
                            <p>{item.text}</p>
                        </div>
                    </div>
                })
            }
        </MenuStyles>
    )
}

export default Menu
