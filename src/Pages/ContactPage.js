import React from 'react';
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../Styles/Layout'
import Title from '../Components/Title';
import ContactForm from '../Components/ContactForm'

const ContactStyles = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        position: absolute;
        left: auto;
    }
`
function Contact() {
    return (
        <MainLayout>
            <Title title={'Contact'} />
            <ContactStyles>
                <InnerLayout className={'contact-section'}>
                    <div className='material-contact-form'>
                        <ContactForm />
                    </div>
                    <div className='contact-panels'>

                    </div>
                </InnerLayout>
            </ContactStyles>
        </MainLayout>
    )
}

export default Contact
