import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Typography, Card, CardContent, Grid, TextField, Button } from '@material-ui/core'

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
    const { name, email, phone, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <>
            <Card>
                <CardContent style={{ textAlign: "center" }}>
                    <Typography gutterBottom variant='h5'>Contact Me</Typography>
                    <Typography color='textSecondary' variant='body2' component="p">Fill out the form and I'll get back to your ASAP!</Typography>
                    <form id='contact-form' onSubmit={handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item >
                                <TextField type="text" label='First Name' placeholder='Enter First Name' variant="outlined" fullWidth required defaultValue={name} onChange={handleChange} name="name" />
                            </Grid>
                            <Grid xs={12} sm={6} item >
                                <TextField type="text" label='Last Name' placeholder='Enter Last Name' variant="outlined" fullWidth required defaultValue={name} onChange={handleChange} name="name" />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="email" label='Email' placeholder='Enter Email' variant="outlined" fullWidth required defaultValue={email} onChange={handleChange} name="email" />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="number" label='Phone' placeholder='Enter Phone Number' variant="outlined" fullWidth required defaultValue={phone} onChange={handleChange} name="phone" />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="text" label='Message' multiline rows={4} placeholder='Type Your Message Here' variant="outlined" fullWidth required defaultValue={message} onChange={handleChange} name="message" />
                            </Grid>
                            <Grid xs={12} item>
                                <Button type='submit' variant='contained' color='primary' fullWidth>Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default ContactForm
