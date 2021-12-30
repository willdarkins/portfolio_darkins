import React from 'react'
import Button from '@mui/material/Button';

//the onClick event should initiate the filter prop to display only portfolio projects designated from the button title
function FilterButton({filter, button}) {
    return (
        <div>
            {
                button.map((but, i) => {
                    return <Button variant="contained" size="medium" key={i} onClick={() => filter(but)}>
                        {but}
                    </Button>
                })
            }
        </div>
    )
}

export default FilterButton
