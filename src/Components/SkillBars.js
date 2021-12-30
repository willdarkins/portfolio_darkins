import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../Styles/Layout'
import Title from '../Components/Title'
import ProgressBar from './ProgressBar'

const SkillBarStyles = styled.section`

`

function SkillBars() {
    return (
        <SkillBarStyles>
            <MainLayout>
                <Title title={'Resume'} />
                <InnerLayout>
                <div className='skills'>
                    <ProgressBar 
                    title={'HTML5'}
                    text={'70%'}
                    // width value will be passed as a prop to the ProgressBar.js component
                    width={'70%'}
                    />
                </div>
                </InnerLayout>
            </MainLayout>
        </SkillBarStyles>
    )
}

export default SkillBars
