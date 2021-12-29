import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import BasicInfo from '../Components/BasicInfo'
import Skills from '../Components/Skills'
import { MainLayout } from '../Styles/Layout'

const AboutStyles = styled.section`

`
function About() {
    return (
        <MainLayout>
            <AboutStyles>
                {/* props to be passed to Title component */}
                <Title title={'About'} />
                <BasicInfo />
                <Skills />
            </AboutStyles>
        </MainLayout>
    )
}

export default About
