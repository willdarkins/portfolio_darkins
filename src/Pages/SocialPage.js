import React from 'react'
import { useState } from 'react'
import { MainLayout, InnerLayout } from '../Styles/Layout'
import Title from '../Components/Title'
import socialPosts from '../Data/socialPosts'
import SocialGrid from '../Components/SocialGrid'
import { InstagramCard } from '../Components/InstagramCard'
import { motion } from 'framer-motion';

function Social() {
    const [post, setPost] = useState(socialPosts)
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
                <Title title={'Social'} />
                <InstagramCard />
                <InnerLayout>
                    <SocialGrid post={post} />
                </InnerLayout>
            </motion.div>
        </MainLayout>
    )
}

export default Social
