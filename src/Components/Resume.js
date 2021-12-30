import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import Title from './Title'
import ResumeSectionTitle from './ResumeSectionTitle'
import ResumeItem from './ResumeItem'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const ResumeStyles = styled.section`
.resume-section-title{
    padding-bottom: 2.5rem;
}
.margin-title{
    margin-top: 4rem;
}
.resume-content{
    border-left: 2px solid var(--border);
}
`
//creating variables to attribute Material UI icon imports in order to render them in ResumeSectionTitle
const work = <WorkIcon />
const school = <SchoolIcon />
function Resume() {
    return (
        <ResumeStyles>
            <Title title={'Resume'} />
            <InnerLayout>
                <div className='resume-section-title'>
                    <ResumeSectionTitle icon={work} title={'Work Experience'} />
                </div>
                <div className='resume-content'>
                    <ResumeItem
                        year={'2021'}
                        title={'Full-Stack Web Development Certificate'}
                        subTitle={'University of Oregon - via Trilogy Education Services'}
                        text={'This is some bullshit information about me and things that I do so people will think I know what Im doing on daily basis. This blurb will go on three more times. This is some bullshit.'}
                    />
                    <ResumeItem
                        year={'2021'}
                        title={'Full-Stack Web Development Certificate'}
                        subTitle={'University of Oregon - via Trilogy Education Services'}
                        text={'This is some bullshit information about me and things that I do so people will think I know what Im doing on daily basis. This blurb will go on three more times. This is some bullshit.'}
                    />
                    <div className='margin-bottom'>
                    <ResumeItem
                        year={'2021'}
                        title={'Full-Stack Web Development Certificate'}
                        subTitle={'University of Oregon - via Trilogy Education Services'}
                        text={'This is some bullshit information about me and things that I do so people will think I know what Im doing on daily basis. This blurb will go on three more times. This is some bullshit.'}
                    />
                    </div>
                </div>

                <div className='resume-section-title margin-title'>
                    <ResumeSectionTitle icon={school} title={'Education'} />
                </div>
                <div className='resume-content'>
                    <ResumeItem
                        year={'2021'}
                        title={'Full-Stack Web Development Certificate'}
                        subTitle={'University of Oregon - via Trilogy Education Services'}
                        text={'This is some bullshit information about me and things that I do so people will think I know what Im doing on daily basis. This blurb will go on three more times. This is some bullshit.'}
                    />
                    <ResumeItem
                        year={'2021'}
                        title={'Full-Stack Web Development Certificate'}
                        subTitle={'University of Oregon - via Trilogy Education Services'}
                        text={'This is some bullshit information about me and things that I do so people will think I know what Im doing on daily basis. This blurb will go on three more times. This is some bullshit.'}
                    />
                    <ResumeItem
                        year={'2021'}
                        title={'Full-Stack Web Development Certificate'}
                        subTitle={'University of Oregon - via Trilogy Education Services'}
                        text={'This is some bullshit information about me and things that I do so people will think I know what Im doing on daily basis. This blurb will go on three more times. This is some bullshit.'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyles>
    )
}

export default Resume
