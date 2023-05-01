import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Services from '../Services/Services';
import About from '../About/About';
import { Box } from '@mui/material';
import Contact from '../Contact/Contact';
import OurTeam from '../../Components/OurTeam/OurTeam';
import Footer from '../../Shared/Footer/Footer';
import FaqPage from '../../Components/FaqPage/FaqPage';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <Box>
            <Carousel></Carousel>
            <About></About>
            <Services></Services>
            <OurTeam></OurTeam>
            <FaqPage></FaqPage>
            <Newsletter></Newsletter>
            <Contact></Contact>
        </Box>
    );
};

export default Home;