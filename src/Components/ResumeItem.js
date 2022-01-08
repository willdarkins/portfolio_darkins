import React from 'react'
import styled from 'styled-components'

const ItemStyles = styled.div`
    display: flex;
    @media screen and (max-width: 420px){
        p{
            font-size: 80%;
        }
    }
    &:not(:last-child){
        padding-bottom: 3rem;
    }
    *{
        color: var(--font-dark);
    }
    .left-content{
        position: relative;
        width: 15%;
        padding-left: 20px;
        &::before{
            content: '';
            position: absolute;
            left: -10px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border);
            background-color:  var(--border);
        }
        p{
            display: inline-block;

        }
    }
    .right-content{
        position: relative;
        padding-left: 3rem;
        &::before{
            content: '';
            position: absolute;
            top: 15px;
            left: 0;
            width: 1rem;
            height: 2px;
            background-color: var(--border);
        }
        h5{
            color: var(--primary);
            font-size: 2rem;
            padding: .4rem;
        }
        h6{
            padding-bottom: .6rem;
            font-size: 1.5rem;
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
