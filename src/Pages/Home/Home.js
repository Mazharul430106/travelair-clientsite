import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Services from '../Services/Services';
import About from '../About/About';
import { Box } from '@mui/material';
import Contact from '../Contact/Contact';
import OurTeam from '../../Components/OurTeam/OurTeam';
import Footer from '../../Shared/Footer/Footer';
import FaqPage from '../../Components/FaqPage/FaqPage';

const Home = () => {
    return (
        <Box>
            <Carousel></Carousel>
            <Box sx={{
                paddingTop: '80px'
            }}>
                <About></About>
            </Box>
            <Services></Services>
            <OurTeam></OurTeam>
            <FaqPage></FaqPage>
            <Contact></Contact>
        </Box>
    );
};

export default Home;