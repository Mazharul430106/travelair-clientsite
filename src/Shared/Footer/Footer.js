import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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

                    <Typography paddingTop={2} sx={{
                        textTransform: 'capitalize', 
                        fontSize: {lg:'20px', md:'20px'}
                    }}>
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
                        <Typography paddingTop={2} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        }} >
                            <CallIcon color='primary' />
                            +88 ( 8800 ) - 3280
                        </Typography>
                        <Typography paddingTop={1} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        }}>
                            <MarkunreadIcon color='primary' />
                            needhelp@company.com
                        </Typography>
                        <Typography paddingTop={1} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        }}>
                            <LocationOnIcon color='primary' />
                            Mirpur 10 golden stret Bangladesh
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{
                paddingTop: '50px'
            }}>
                <hr />
                <Box sx={{
                    display: {lg:'flex', md:'flex'},
                    flexDirection: {xs:'row-reverse', lg:'row', md: 'row'},
                    alignItems: 'center',
                    justifyContent: {lg:'space-between', md:'space-between', xs:'center'},
                    paddingTop: '40px'
                }}>
                    <Typography sx={{
                        paddingTop: 2,
                        paddingBottom: {xs: '30px', lg:'0', md:'0'},
                       
                    }}>
                        &copy; Copyright 2023 travelAir.com
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <Link style={{
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '4px',
                            border: '1px solid #33bccd',
                            color: '#33bccd',
                            
                        }} >
                            <FacebookOutlinedIcon />
                        </Link>
                        <Link style={{
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '4px',
                            border: '1px solid #33bccd',
                            color: '#33bccd',
                            
                        }} >
                            <TwitterIcon />
                        </Link>
                        <Link style={{
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '4px',
                            border: '1px solid #33bccd',
                            color: '#33bccd',
                            
                        }} >
                            <InstagramIcon />
                        </Link>
                        <Link style={{
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '4px',
                            border: '1px solid #33bccd',
                            color: '#33bccd',
                            
                        }} >
                            <LinkedInIcon />
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;