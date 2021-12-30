import React from 'react';
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../Styles/Layout'
import Title from '../Components/Title';
import ContactForm from '../Components/ContactForm'
import ContactCard from '../Components/ContactCards'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import PushPinIcon from '@mui/icons-material/PushPin';

const ContactStyles = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        position: absolute;
        left: auto;
        .contact-cards{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
    }
    .material-contact-form{
        
    }
`

//creating variables to attribute Material UI icon imports in order to render them in ContactPage.js
const phone = <PhoneIphoneIcon />
const email = <EmailIcon />
const location = <PushPinIcon />

function Contact() {
    return (
        <MainLayout>
            <Title title={'Contact'} />
            <ContactStyles>
                <InnerLayout className={'contact-section'}>
                    <div className='material-contact-form'>
                        <ContactForm />
                    </div>
                    <div className='contact-cards'>
                    <ContactCard title={'Phone'} icon={phone} contact1={'C: 503-807-3301'} contact2={'W: 503-504-7913'}/>
                    <ContactCard title={'Email'} icon={email} contact1={'P: willdarkins@gmail.com'} contact2={'W: will.darkins@audacy.com'}/>
                    <ContactCard title={'Address'} icon={location} contact1={'2810 SW 199th PL'} contact2={'Aloha, OR 97003'}/>
                    </div>
                </InnerLayout>
            </ContactStyles>
        </MainLayout>
    )
}

export default Contact
