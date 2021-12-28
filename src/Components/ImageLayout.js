import React from 'react'
import styled from 'styled-components'
import profile from '../Images/Profile-Pic.jpg'

const ImageStyles = styled.div`

`

function ImageLayout() {
    return (
        <ImageStyles>
            <div className='img-content'>
                <img src={profile} alt='at work image' />
            </div>
            <div className='descrip-content'>
                
            </div>
        </ImageStyles>
    )
}

export default ImageLayout
