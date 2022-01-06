import React from 'react'
import { MainLayout } from '../Styles/Layout'
import SkillBars from '../Components/SkillBars'
import Resume from '../Components/Resume'
import { motion } from 'framer-motion';

function ResumePage() {
    return (
        <MainLayout>
            <motion.div
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className='intro'>
                <SkillBars />
                <Resume />
            </motion.div>
        </MainLayout>
    )
}

export default ResumePage
