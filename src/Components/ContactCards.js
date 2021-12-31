import React from 'react'
import styled from 'styled-components';

const CardStyles = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--dark-card) ;
    color: var(--font-dark);
    display: flex;
    align-items: center;
    box-shadow: 5px 10px 18px #888888;
    &:not(:last-child){
        margin-bottom: 2rem;
    }
    .left-content {
        padding: 1.8rem;
        border: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        svg{
            font-size: 2.2rem; 
        }
    .right-content{
        h6{
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }
        //turn into anchor tags later
        p{
            padding: .4rem 0;
        }
    }
    }
`

function ContactCard({icon,title, contact1, contact2}) {
    return (
        <CardStyles>
            <div className='left-content'>
                <p>{icon}</p>
            </div>
            <div className='right-content'>
                <h6>{title}</h6>
                <p>{contact1}</p>
                <p>{contact2}</p>
            </div>
        </CardStyles>
    )
}

export default ContactCard
