import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import Title from '../Components/Title'
import ProgressBar from './ProgressBar'

const SkillBarStyles = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
}
    }
`

function SkillBars() {
    return (
        <SkillBarStyles>
                <Title title={'Skill Competency'} />
                <InnerLayout>
                    <div className='skills'>
                        <ProgressBar
                            title={'React JS'}
                            text={'88%'}
                            // width value will be passed as a prop to the ProgressBar.js component
                            width={'88%'}
                        />
                        <ProgressBar
                            title={'JavaScript'}
                            text={'78%'}
                            // width value will be passed as a prop to the ProgressBar.js component
                            width={'78%'}
                        />
                        <ProgressBar
                            title={'CSS3'}
                            text={'75%'}
                            // width value will be passed as a prop to the ProgressBar.js component
                            width={'75%'}
                        />
                        <ProgressBar
                            title={'Photoshop'}
                            text={'72%'}
                            // width value will be passed as a prop to the ProgressBar.js component
                            width={'72%'}
                        />
                        <ProgressBar
                            title={'HTML5'}
                            text={'70%'}
                            // width value will be passed as a prop to the ProgressBar.js component
                            width={'70%'}
                        />
                        <ProgressBar
                            title={'Node.js'}
                            text={'65%'}
                            // width value will be passed as a prop to the ProgressBar.js component
                            width={'65%'}
                        />
                    </div>
                </InnerLayout>
        </SkillBarStyles>
    )
}

export default SkillBars
