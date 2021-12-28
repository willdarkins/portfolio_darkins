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
