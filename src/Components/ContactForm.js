import React from 'react'
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import styled from 'styled-components';


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

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { firstname, lastname, email, phone, message } = e.target.elements;
      let details = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };    
    return (
        <ContactCardStyles>
            <Card style={{maxWidth:535, margin:'0 auto'}} className={'card'}>
                <CardContent>
                    <Typography gutterBottom variant='h5'>Reach out and say hello!</Typography>
                    <Typography gutterBottom variant='body2' color='textsecondary' component='p'>I'll respond ASAP to questions and work inquires</Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField InputLabelProps={{style: { color: 'var(--font-dark)' },}} type='text' label='First Name' placeholder='First Name' variant='outlined' fullWidth required htmlFor='firstname' />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField InputLabelProps={{style: { color: 'var(--font-dark)' },}} type='text' label='Last Name' placeholder='Last Name' variant='outlined' fullWidth required htmlFor='lastname' />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField InputLabelProps={{style: { color: 'var(--font-dark)' },}} type='email' label='Email' placeholder='Enter Email' variant='outlined' fullWidth required htmlFor='email' />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField InputLabelProps={{style: { color: 'var(--font-dark)' },}} type='number' label='Phone #' placeholder='Enter Your Phone #' variant='outlined' fullWidth required htmlFor='phone' />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField InputLabelProps={{style: { color: 'var(--font-dark)' },}} type='text' label='Message' multiline rows={4} placeholder='Type Message Here' variant='outlined' fullWidth required htmlFor='message' />
                            </Grid>
                            <Grid xs={12} item>
                                <Button type='submit' color='primary' variant='contained' fullWidth>{status}</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </ContactCardStyles>
    )
}

export default ContactForm
