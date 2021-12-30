import React from 'react'
import styled from 'styled-components'

const SectionTitleStyles = styled.div`
    display: flex;
    align-items: center;
    p{
        padding-right: 1rem;
        color: var(--font-dark);
    }
    h3{
        color: var(--font-dark);
    }
`

//props passed
function ResumeSectionTitle({icon, title}) {
    return (
        <SectionTitleStyles>
            <p>{icon}</p>
            <h3>{title}</h3>
        </SectionTitleStyles>
    )
}

export default ResumeSectionTitle
