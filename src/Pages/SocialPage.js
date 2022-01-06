import React from 'react'
import { useState } from 'react'
import { MainLayout, InnerLayout } from '../Styles/Layout'
import Title from '../Components/Title'
import socialPosts from '../Data/socialPosts'
import SocialGrid from '../Components/SocialGrid'
import { motion } from 'framer-motion';

function Social() {
    const [post, setPost] = useState(socialPosts)
    return (
        <MainLayout>
            <motion.div
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className='intro'>
                <Title title={'Social'} />
                <InnerLayout>
                    <SocialGrid post={post} />
                </InnerLayout>
            </motion.div>
        </MainLayout>
    )
}

export default Social
