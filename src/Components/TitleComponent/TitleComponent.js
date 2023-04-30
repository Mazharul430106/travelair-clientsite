import { Box } from '@mui/material';
import React from 'react';
import HeaderImg from '../../assets/headerTitle.jpg';
import BannerImg from '../../assets/banner.jpg'


const TitleComponent = () => {
    return (
        <Box style={{
            background: `url(${BannerImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'

        }}>
            
            <Box sx={{
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h1 >This is a new componentn herere</h1>
            </Box>
        </Box>
    );
};

export default TitleComponent;