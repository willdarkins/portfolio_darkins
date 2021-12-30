import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkIcon from '@mui/icons-material/Link';

const MenuStyles = styled.div`

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
