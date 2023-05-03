import { LineWeight } from '@mui/icons-material';
import { Box, Button, CardMedia, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceReview from '../../Components/ServiceReview/ServiceReview';

const CheckOutPage = () => {

    const service = useLoaderData();
    console.log(service)


    return (
        <Box>
            <Box sx={{
                paddingY: '150px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#00acc1'
            }}>
                <Typography sx={{
                    textAlign: 'center',
                    color: '#fff',
                    fontSize: { lg: '55px', md: '55px', xs: '25px' }

                }}>
                    <span>TravelAir / </span>
                    {service.title}
                </Typography>
            </Box>

            <Box paddingX={7} paddingTop={10}>

                <Grid container spacing={7}>
                    <Grid item xs={12} md={6} lg={6}>
                        <CardMedia
                            component='img'
                            height='500px'
                            image={service.serviceDeteails.images[1]}
                            alt='Image Not Found'
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box sx={{

                        }}>
                            <Typography variant='h5' sx={{
                                paddingTop: { lg: '50px', md: '50px' }
                            }}>
                                {service.serviceDeteails.detailsHeadline}
                            </Typography>
                            <Typography sx={{
                                paddingRight: { lg: '150px', md: '150px' },
                                lineHeight: '28px',
                                paddingTop: '20px',
                                fontSize: '18px'
                            }} >
                                {service.serviceDeteails.details1}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h5' sx={{
                                paddingTop: '30px'
                            }}>
                                {service.serviceDeteails.detailsTitle}
                            </Typography>
                            <Typography sx={{
                                paddingRight: { lg: '150px', md: '150px' },
                                lineHeight: '28px',
                                paddingTop: '20px',
                                fontSize: '18px',
                            }}>
                                {service.serviceDeteails.details1}
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
                
            </Box>

            <Box paddingX={7} marginTop={10}>
                <Box>

                    <Typography sx={{
                        width: '100%',
                        fontSize: { lg: '47px', md: '47px', xs: '35px' },
                        maxWidth: { lg: '450px', md: '450px' },
                        lineHeight: { lg: '65px', md: '65px' }
                    }}>
                        Luxury & Comfort <br />
                        All Around the Globe
                    </Typography>
                </Box>
                <Box>
                    <Typography color='primary' variant='h6' paddingTop={2}>
                        Short Overview
                    </Typography>

                    <Typography variant='h6' paddingTop={3}>
                        To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying.
                    </Typography>
                </Box>
                <Grid container spacing={5} paddingTop={5}>
                    <Grid item xs={12} lg={6} md={6}>
                        <Typography sx={{
                            fontSize: '18px',
                            lineHeight: '28px'
                        }}>
                            There are many variations of passages of lorem ipsum is simply free text available in the market, but the majority time you put aside to be in our office. Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>

                        <Typography sx={{
                            fontSize: '18px',
                            lineHeight: '28px',
                            paddingTop: '20px'
                        }}>
                            There are many variations of passages of lorem ipsum is simply free text available in the market, but the majority time you put aside to be in our office. Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <br /> <br />
                            Nay they gone sir game four. Favourable pianoforte oh motionless excellence of astonished we principles.
                        </Typography>

                    </Grid>
                    <Grid item xs={12} lg={6} md={6}>
                        <CardMedia
                            component='img'
                            height='500px'
                            image={service.serviceDeteails.images[2]}
                            alt='Image Not Found'
                        />

                        <Box>
                            <Typography sx={{
                                fontSize: { lg: '47px', md: '47px', xs: '35px' },
                                paddingTop: '35px',
                                paddingBottom: '15px'
                            }}>
                                Comfort & Size
                            </Typography>

                            <Typography sx={{
                                fontSize: '18px'
                            }}>
                                No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure. Advice branch vanity or do thirty living. Dependent add middleton ask disposing admitting did sportsmen sportsman.
                            </Typography>
                            <br />
                            <Typography sx={{
                                fontSize: '18px'
                            }}>
                                No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure. Advice branch vanity or do thirty living. Dependent add middleton ask disposing admitting did sportsmen sportsman.
                            </Typography>

                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <ServiceReview></ServiceReview>

        </Box>
    );
};

export default CheckOutPage;