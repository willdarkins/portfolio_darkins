import React, { useState } from 'react'
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const ContactCardStyles = styled.div`
    .card{
        color: var(--font-dark);
        background: var(--dark-card);
        box-shadow: 8px 8px 8px 8px rgba(0,0,0,0.2);
        transition: 0.3s;
        padding: 1.2rem;
    }
    .card:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
   p{
       margin-bottom: 1rem;
   }

`
function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_etpi9qr', form.current, 'user_8RK90OEwm3kDqQ9S7YnfE')
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!')
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }
    return (
        <ContactCardStyles>
            <Card style={{ maxWidth: 535, margin: '0 auto' }} className={'card'}>
                <CardContent>
                    <Typography gutterBottom variant='h5'>Reach out and say hello!</Typography>
                    <Typography gutterBottom variant='body2' color='textsecondary' component='p'>I'll respond ASAP to questions and work inquires</Typography>
                    <form onSubmit={sendEmail}>
                        <Grid container spacing={2}>
                            <Grid xs={12} item></Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField
                                    // onChange={(e) => setFirst(e.target.value)}
                                    InputLabelProps={{ style: { color: 'var(--font-dark)' }, }}
                                    type='text'
                                    label='First Name'
                                    placeholder='First Name'
                                    variant='outlined'
                                    fullWidth
                                    required
                                    htmlFor='firstname'
                                    name='FirstName' />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField
                                    // onChange={(e) => setLast(e.target.value)}
                                    InputLabelProps={{ style: { color: 'var(--font-dark)' }, }}
                                    type='text'
                                    label='Last Name'
                                    placeholder='Last Name'
                                    variant='outlined'
                                    fullWidth
                                    required
                                    htmlFor='lastname'
                                    name='LastName' />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    // onChange={(e) => setEmail(e.target.value)}
                                    InputLabelProps={{ style: { color: 'var(--font-dark)' }, }}
                                    type='email'
                                    label='Email'
                                    placeholder='Enter Email'
                                    variant='outlined'
                                    fullWidth
                                    required
                                    htmlFor='email'
                                    name='email' />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    // onChange={(e) => setPhone(e.target.value)}
                                    InputLabelProps={{ style: { color: 'var(--font-dark)' }, }}
                                    type='number'
                                    label='Phone #'
                                    placeholder='Enter Your Phone #'
                                    variant='outlined'
                                    fullWidth
                                    required
                                    htmlFor='phone'
                                    name='phone' />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    // onChange={(e) => setMessage(e.target.value)}
                                    InputLabelProps={{ style: { color: 'var(--font-dark)' }, }}
                                    type='text'
                                    label='Message'
                                    multiline rows={4}
                                    placeholder='Type Message Here'
                                    variant='outlined'
                                    fullWidth
                                    required
                                    htmlFor='message'
                                    name='message' />
                            </Grid>
                            <Grid xs={12} item>
                                <Button
                                    type='submit' color='primary' variant='contained' fullWidth>Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </ContactCardStyles>
    )
}

export default ContactForm
