import React from 'react'
import { MainLayout } from '../Styles/Layout'
import SkillBars from '../Components/SkillBars'
import Resume from '../Components/Resume'

function ResumePage() {
    return (
        <MainLayout>
            <SkillBars />
            <Resume />
        </MainLayout>
    )
}

export default ResumePage
