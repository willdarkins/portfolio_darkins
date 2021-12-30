import React from 'react'
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { margin } from '@mui/system';

function ContactForm() {
    return (
        <>
            <Card style={{maxWidth:450, margin:'0 auto'}}>
                <CardContent>
                    <Typography gutterBottom variant='h5'>Reach out, and say hello!</Typography>
                    <Typography gutterBottom variant='body2' color='textsecondary' component='p'>I'll respond ASAP to questions and work inquires</Typography>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField type='text' label='First Name' placeholder='First Name' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField type='text' label='Last Name' placeholder='Last Name' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type='email' label='Email' placeholder='Enter Email' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type='number' label='Phone #' placeholder='Enter Your Phone #' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type='text' label='Message' multiline rows={4} placeholder='Type Message Here' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <Button type='submit' color='primary' variant='contained' fullWidth>Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default ContactForm