import React from 'react'
import { MainLayout } from '../Styles/Layout'
import SkillBars from '../Components/SkillBars'
import Resume from '../Components/Resume'
import { motion } from 'framer-motion';

function ResumePage() {
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
                <SkillBars />
                <Resume />
            </motion.div>
        </MainLayout>
    )
}

export default ResumePage
