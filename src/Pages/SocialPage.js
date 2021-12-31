import React from 'react'
import { useState } from 'react'
import { MainLayout, InnerLayout } from '../Styles/Layout'
import Title from '../Components/Title'
import socialPosts from '../Data/socialPosts'
import SocialGrid from '../Components/SocialGrid'

function Social() {
    const[post, setPost] = useState(socialPosts)
    return (
        <MainLayout>
            <Title title={'Social'} />
            <InnerLayout>
                <SocialGrid post={post} />
            </InnerLayout>
        </MainLayout>
    )
}

export default Social
