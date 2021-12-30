import React from 'react'
import styled from 'styled-components';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import PushPinIcon from '@mui/icons-material/PushPin';

const CardStyles = styled.div`
`

//creating variables to attribute Material UI icon imports in order to render them in ContactPage.js
const phone = <PhoneIphoneIcon />
const email = <EmailIcon />
const location = <PushPinIcon />

function ContactCards() {
    return (
        <CardStyles>
            
        </CardStyles>
    )
}

export default ContactCards
