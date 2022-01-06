import React from 'react'
import { Grid, Typography, Avatar } from '@material-ui/core'
import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';
import FANProfilePic from '../Images/avatar_FAN.jpg'

const InstaCardStyles = styled.div`
    .main{
        border: .2rem solid #cccccc;
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
        border: .05rem solid black;
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
            <ClearIcon className='header'/>
            </Grid>
        </Grid>
    )
}
const Photo = () => {
    return (
        <Avatar
        className='photo'
        alt='1080 The FAN'
        src= {FANProfilePic} />
    )
}
const UserName = () => {
    
}
const ProfileName = () => <Typography variant='h6'>ProfileName</Typography>
const FollowButton = () => <Typography variant='h6'>FollowButton</Typography>
