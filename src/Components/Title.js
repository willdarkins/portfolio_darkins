import React from 'react'
import styled from 'styled-components'

const TitleStyles = styled.div`
    position: relative;
    h2{
        color: var(--font-dark);
        font-size: 3rem;
        font-weight: 600;
        text-transform: uppercase;
        border-bottom: var(--blue) solid;
        @media screen and (max-width: 620px){
        font-size: 2.5rem;
        }
        @media screen and (max-width: 496px){
        font-size: 2rem;
        }
    }

`
//passing prop that will be universal values for page titles across each section of the site
function Title({ title }) {
    return (
        <>
            <TitleStyles>
                <h2>{title}</h2>
            </TitleStyles>
        </>
    )
}

export default Title
