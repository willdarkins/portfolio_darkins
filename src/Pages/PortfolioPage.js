import React from 'react'
import { useState } from 'react'
import {MainLayout, InnerLayout} from '../Styles/Layout'
import Title from '../Components/Title'
import portfolios from '../Data/portfolios'

function Portfolio() {
    const[menuItem, setMenuItem] = useState(portfolios)
    return (
        <MainLayout>
            <Title title={'Portfolio'} />
            <InnerLayout>

            </InnerLayout>
        </MainLayout>
    )
}

export default Portfolio
