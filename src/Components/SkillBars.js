import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../Styles/Layout'
import Title from '../Components/Skills'

const SkillBarStyles = styled.section`

`

function SkillBars() {
    return (
        <SkillBarStyles>
            <MainLayout>
                <Title title={'Resume'} />
                <InnerLayout>

                </InnerLayout>
            </MainLayout>
        </SkillBarStyles>
    )
}

export default SkillBars
