import React from 'react'
import { useState } from 'react'
import { MainLayout, InnerLayout } from '../Styles/Layout'
import Title from '../Components/Title'
import portfolios from '../Data/portfolios'
import Menu from '../Components/Menu'
import FilterButton from '../Components/Button'
import { motion } from 'framer-motion';

//Because each value in the Set has to be unique, the value equality will be checked, and weed out the duplicate category designations
const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]

function Portfolio() {
    const [menuItem, setMenuItem] = useState(portfolios)
    const [button, setButtons] = useState(allButtons)

    //filter function used in order to filter array items from category and display on a button
    const filter = (button) => {
        //conditonal statement to return all data objects from the portfolios array when clicked by the corresponding button
        if (button === 'All') {
            setMenuItem(portfolios)
            return;
        }
        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItem(filteredData)
    }
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
            }} className='intro'>
                <Title title={'Portfolio'} />
                <InnerLayout>
                    {/* allows me to access the filter function inside the Button Component */}
                    <FilterButton filter={filter} button={button} />
                    <Menu menuItem={menuItem} />
                </InnerLayout>
            </motion.div>
        </MainLayout>
    )
}

export default Portfolio
