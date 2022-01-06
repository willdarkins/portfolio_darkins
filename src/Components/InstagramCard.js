import React from 'react'
import { Grid, Button, Typography, Avatar } from '@material-ui/core'
import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';
import FANProfilePic from '../Images/avatar_FAN.jpg'

const InstaCardStyles = styled.div`
    .main{
        border: .1rem solid #cccccc;
        padding: 1rem;
        border-radius: .2rem;
        max-width: 200px;
        background-color: var(--dark-card) ;
    }
    .header{
        color: var(--font-dark);
        height: 0.9rem;
    }
    .photo{
        width: 5rem;
        height: 5rem;
        box-shadow: 1px 1px 1px 1px #888888;
    }
    .userName{
        margin: 1.5rem 0 1rem 0;
        text-align: center;
        font-weight: bold;
        color: var(--font-dark);

    }
    .button{
        text-transform: none;
        padding-left: 1rem;
        padding-right: 1rem;
        a{
            font-size: .9rem;
        }
    }
`

export const InstagramCard = () => {
    return (
        <InstaCardStyles>
            <Grid container direction='column' className='main' alignItems='center'>
                <Header />
                <Photo />
                <UserName />
                <ProfileName />
                <FollowButton />
            </Grid>
        </InstaCardStyles>
    )
}

const Header = () => {
    return (
        <Grid container justifyContent='flex-end'>
            <Grid item xs={1}>
                <ClearIcon className='header' />
            </Grid>
        </Grid>
    )
}
const Photo = () => {
    return (
        <Avatar
            className='photo'
            alt='1080 The FAN'
            src={FANProfilePic} />
    )
}
const UserName = () => {
    return (
        <Grid container justifyContent='center' alignItems='center' spacing={4}>
            <Typography variant='body2' className='userName'>1080thefan</Typography>
        </Grid>
    )

}
const ProfileName = () => {
    return (
        <Typography color='textSecondary' variant='caption'>1080 The FAN</Typography>
    )
}
const FollowButton = () => {
    return (
        <Button color= "primary" variant='contained' size='small' className='button'>
            <a href='https://www.instagram.com/1080thefan/?hl=en' target='_blank' rel='noopener noreferrer'>
                           Follow </a>
        </Button> 
    )
}
