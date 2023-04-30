import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Services from '../Services/Services';
import About from '../About/About';
import { Box } from '@mui/material';

const Home = () => {
    return (
        <Box>
            <Box>
                <Carousel></Carousel>
            </Box>
            <Box sx={{
                paddingTop: '100px' 
            }}>
                <About></About>
            </Box>
            <Box sx={{
                paddingTop: '100px'
            }}>
                <Services></Services>
            </Box>
        </Box>
    );
};

export default Home;