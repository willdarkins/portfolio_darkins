import React from 'react'
import styled from 'styled-components'

const ProgressStyles = styled.div`
    p{
        color: var(--font-dark);
        padding-right: 1.1rem;
    }
    .progress-bar{
        display: flex;
        align-items: center;
        .progress{
            position: relative;
            width: 100%;
            height: .4rem;
            background-color: #cae6d5;
            span{
                background-color: var(--border);
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
            }
        }
    }
`

//prop values passed from SkillBars.js
function ProgressBar({title, text, width }) {
    return (
        <ProgressStyles>
            <h6>{title}</h6>
            <div className='progress-bar'>
                <p>{text}</p>
                <div className='progress'>
                    <span style={{width: width}}></span>
                </div>
            </div>
        </ProgressStyles>
    )
}

export default ProgressBar
