import React from 'react'
import styled from 'styled-components'

const ItemStyles = styled.div`
    display: flex;
    *{
        color: var(--font-dark);
    }
    .left-content{
        width: 15%;
        p{
            display: inline-block;

        }
    }
    .right-content{
        h5{
            color: var(--primary);
            font-size: 2rem;
            padding: .4rem;
        }
        h6{
            padding-bottom: .6rem;
        }
    }
`
//props that will be passed to the Resume component in order to build individual entries for school and work experience
function ResumeItem({year, title, sub, text}) {
    return (
        <ItemStyles>
            <div className='left-content'>
            <p>{year}</p>
            </div>
            <div className='right-content'>
            <h5>{title}</h5>
            <h6>{sub}</h6>
            <p>{text}</p>
            </div>
        </ItemStyles>
    )
}

export default ResumeItem
