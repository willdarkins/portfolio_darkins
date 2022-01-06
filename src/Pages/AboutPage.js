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
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .2
                    }
                },
            }}>
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
