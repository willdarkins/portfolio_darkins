import React from 'react';
import styled from 'styled-components'
import {MainLayout, InnerLayout} from '../Styles/Layout'
import Title from '../Components/Title';
// import ContactForm from '../Components/ContactForm'

const ContactStyles = styled.section`

`

function Contact() {
    return (
        <MainLayout>
            <Title title={'Contact'} />
            {/* <ContactForm /> */}
        </MainLayout>
    )
}

export default Contact
