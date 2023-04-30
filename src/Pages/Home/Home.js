import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Services from '../Services/Services';
import About from '../About/About';
import { Box } from '@mui/material';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <Box>
            <Box>
                <Carousel></Carousel>
            </Box>
            <Box sx={{
                paddingTop: '80px' 
            }}>
                <About></About>
            </Box>
            <Box sx={{
                paddingTop: '80px'
            }}>
                <Services></Services>
            </Box>
            <Box>
                <Contact></Contact>
            </Box>

        </Box>
    );
};

export default Home;