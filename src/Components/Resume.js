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
                        year={'APR 2022 - PRESENT'}
                        title={'Product Support Specialist - AdCellerant'}
                        subTitle={'University of Oregon - via Trilogy Education Services'}
                        text={'Providing top level support and troubleshooting to clients and developers using proprietary digital media and analytics software.'}
                    />
                    <ResumeItem
                        year={'FEB 2018 - APR 2022'}
                        title={'Digital Content Manager - Audacy Portland'}
                        subTitle={'University of Oregon - via Trilogy Education Services'}
                        text={' Directed digital content creation for 7 radio stations, working to capture brand image and increase audience engagement each week.'}
                    />
                    <ResumeItem
                        year={'MAY 2015 - PRESENT'}
                        title={'Producer/Host - ESPN Sports Radio 1080 The FAN'}
                        subTitle={'University of Oregon - via Trilogy Education Services'}
                        text={'Host and produce "Sinner and The Saint", a Saturday monring sports radio show that focuses on Pacific NW storylines and fun asides.'}
                    />
                    <div className='margin-bottom'>
                    <ResumeItem
                        year={'JUL 2017 - MAY 2017'}
                        title={'Producer - KPTV FOX 12 Oregon'}
                        subTitle={'University of Oregon - via Trilogy Education Services'}
                        text={'Created televised local news segments in a team focused environment predicated on deadlines and effective communication to relay news.'}
                    />
                    </div>
                </div>

                <div className='resume-section-title margin-title'>
                    <ResumeSectionTitle icon={school} title={'Education'} />
                </div>
                <div className='resume-content'>
                    <ResumeItem
                        year={'2022'}
                        title={'Bootcamp Certificate, University of Oregon'}
                        subTitle={'University of Oregon - via Trilogy Education Services'}
                        text={'A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS'}
                    />
                    <ResumeItem
                        year={'2016'}
                        title={'Associates in Digital Broadcast Engineering, Mount Hood Community College'}
                        subTitle={'University of Oregon - via Trilogy Education Services'}
                        text={'Two year Integrated media program emphasizing development in audio, graphic and video skills that were applied during internship opportunities with local media outlets.'}
                    />
                    <ResumeItem
                        year={'2012'}
                        title={'Bachelors in Speech Communication, Oregon State University'}
                        subTitle={'University of Oregon - via Trilogy Education Services'}
                        text={'Focused on developing  communication competence through the examination of both theoretical & practical aspects of human communication. Recognize the cultural and historical significance of rhetoric '}
                    />
                </div>
            </InnerLayout>
        </ResumeStyles>
    )
}

export default Resume
