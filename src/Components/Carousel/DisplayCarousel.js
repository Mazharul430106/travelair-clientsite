import { Box } from '@mui/material';
import React from 'react';

const DisplayCarousel = ({ singleItem }) => {
    console.log(singleItem)
    return (
        <Box>
           <img src={singleItem.img} className='w-full max-h-[600px]' alt="" />
        </Box>
    );
};

export default DisplayCarousel;