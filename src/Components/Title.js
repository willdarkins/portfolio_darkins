import React from 'react'
import styled from 'styled-components'

const TitleStyles = styled.div`
    position: relative;
    h2{
        color: var(--font-dark);
    }
`

//passing two props that will be universal values for page titles across each section of the site
function Title({ title, span }) {
    return (
        <>
            <h2>{title} <span>{span}</span></h2>
        </>
    )
}

export default Title
