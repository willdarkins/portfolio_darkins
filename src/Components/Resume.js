import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import Title from './Title'
import ResumeSectionTitle from './ResumeSectionTitle'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const ResumeStyles = styled.section`
`
//creating variables to attribute Material UI icon imports in order to render them in ResumeSectionTitle
const work = <WorkIcon />
const school = <SchoolIcon />
function Resume() {
    return (
        <ResumeStyles>
            <Title title={'Resume'} />
            <InnerLayout>
                <ResumeSectionTitle icon={work} title={'Work Experience'} />
            </InnerLayout>
        </ResumeStyles>
    )
}

export default Resume
