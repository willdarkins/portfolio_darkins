import React from 'react'
import styled from 'styled-components'

const SectionTitleStyles = styled.div`

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
