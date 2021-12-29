import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import Title from './Title'

const SkillStyles = styled.section`
`

function Skills() {
    return (
        <InnerLayout>
            <SkillStyles>
                <Title title={'Skills'} />
            </SkillStyles>
        </InnerLayout>
    )
}

export default Skills
