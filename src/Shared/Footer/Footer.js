import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
    return (
        <Box sx={{
            padding: 7,
            marginTop: 10,
            backgroundColor: '#424242',
            color: '#fff'

        }}>
            <Grid container spacing={4} >
                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant='h5'>
                        TravelAir
                    </Typography>

                    <Typography paddingTop={2}>
                        Private jet charters save your time and give you comfort.
                    </Typography>


                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant='h5'>
                        Explore
                    </Typography>
                    <Box >
                        <Typography paddingTop={2}>
                            <Link to='/about'>About</Link>
                        </Typography>
                        <Typography paddingTop={1}>
                            <Link to='/about'>Private Jet Catering</Link>
                        </Typography>
                        <Typography paddingTop={1}>
                            <Link to='/about'>Destination</Link>
                        </Typography>
                        <Typography paddingTop={1}>
                            <Link to='/about'>Book Flight</Link>
                        </Typography>
                    </Box>
                </Grid >
                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant='h5'>
                        Links
                    </Typography>
                    <Box>
                        <Typography paddingTop={2}>
                            <Link to='/about'>Contact Us</Link>
                        </Typography>
                        <Typography paddingTop={1}>
                            <Link to='/about'>Private Jet Catering</Link>
                        </Typography>
                        <Typography paddingTop={1}>
                            <Link to='/about'>Blog</Link>
                        </Typography>
                        <Typography paddingTop={1}>
                            <Link to='/about'>FAQ</Link>
                        </Typography>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant='h5'>
                        Contact
                    </Typography>

                    <Box>
                        <Typography paddingTop={2}>
                            <CallIcon></CallIcon>
                            +88 ( 8800 ) - 3280
                        </Typography>
                        <Typography paddingTop={1}>
                            <MarkunreadIcon></MarkunreadIcon>
                            needhelp@company.com
                        </Typography>
                        <Typography paddingTop={1}>
                            <LocationOnIcon></LocationOnIcon>
                            Mirpur 10 golden stret Bangladesh
                        </Typography>
                    </Box>


                </Grid>
            </Grid>
            <Box sx={{
                paddingTop: '50px'
            }}>
                <hr/>
                <Typography sx={{
                    textAlign: 'center',
                    paddingTop:2
                }}>
                    &copy; Copyright 2023 travelAir.com
                </Typography>
            </Box>

        </Box>
    );
};

export default Footer;