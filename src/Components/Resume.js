import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import Title from './Title'

const ResumeStyles = styled.section`
`

function Resume() {
    return (
        <ResumeStyles>
            <Title title={'Resume'} />
            <InnerLayout>

            </InnerLayout>
        </ResumeStyles>
    )
}

export default Resume
