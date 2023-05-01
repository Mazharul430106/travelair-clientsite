import { Box, CardMedia } from '@mui/material';
import React from 'react';

const DisplayCarousel = ({ singleItem }) => {
    console.log(singleItem)
    const {img, title, desc} = singleItem;
    return (
        <Box>
           <img src={img} style={{width: '100%',  }}  alt="" />
        </Box>
    );
};

export default DisplayCarousel;