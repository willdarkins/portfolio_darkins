import React from 'react'
import styled from 'styled-components'

const CardStyles = styled.div`
    margin: 0 1rem;
    .container{
        box-shadow: 8px 8px 8px 8px rgba(0,0,0,0.2);
        transition: 0.3s;
        padding: 1.2rem;
    }
    .container:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`


//passing props for info that will be displayed on each of the core skills listed on the About Page
function ServiceCard({ image, title, paragraph }) {
    return (
        <CardStyles>
            <div className='container'>
                <img src={image} alt='' />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </CardStyles>
    )
}

export default ServiceCard
