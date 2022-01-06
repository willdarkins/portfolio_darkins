import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import BasicInfo from '../Components/BasicInfo'
import Skills from '../Components/Skills'
import { MainLayout } from '../Styles/Layout'
import { motion } from 'framer-motion';

const AboutStyles = styled.section`

`
function About() {
    return (
        <MainLayout>
            <motion.div
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className='intro'>
                <AboutStyles>
                    {/* props to be passed to Title component */}
                    <Title title={'About'} />
                    <BasicInfo />
                    <Skills />
                </AboutStyles>
            </motion.div>
        </MainLayout>
    )
}

export default About
