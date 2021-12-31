import React from 'react'
import styled from 'styled-components';
import Button from '@mui/material/Button';

const ButtonStyles = styled.div`
    margin: 0 auto;
    margin-bottom: 2.5rem;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    //just in case there are more buttons
    flex-wrap: wrap;
    .material-button{
        cursor: pointer;
        &:not(:last-child){
        margin-right: .6rem;
    }
    }
`

//the onClick event should initiate the filter prop to display only portfolio projects designated from the button title
function FilterButton({filter, button}) {
    return (
        <ButtonStyles>
            {
                button.map((but, i) => {
                    return <Button className={'material-button'} variant="contained" size="large" key={i} onClick={() => filter(but)}>
                        {but}
                    </Button>
                })
            }
        </ButtonStyles>
    )
}

export default FilterButton
