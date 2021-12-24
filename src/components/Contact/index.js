import React, { useState } from 'react';
import { Typography, Card, CardContent, Grid, TextField, Button } from '@material-ui/core'
import  maxWidth  from '@mui/system'

function ContactForm() {
    return (
        <>
            <Card>
                <CardContent style={{textAlign: "center"}}>
                    <Typography gutterBottom variant='h5'>Contact Me</Typography>
                    <Typography color='textSecondary' variant='body2' component="p">Fill out the form and I'll get back to your ASAP!</Typography>
                    <form id='contact-form'>
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item >
                            <TextField label='First Name' placeholder='Enter First Name' variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} sm={6} item >
                            <TextField label='Last Name' placeholder='Enter Last Name' variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField type="email" label='Email' placeholder='Enter Email' variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField type="number" label='Phone' placeholder='Enter Phone Number' variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label='Message' multiline rows={4} placeholder='Type Your Message Here' variant="outlined" fullWidth required />
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
