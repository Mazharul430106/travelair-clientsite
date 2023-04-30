import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <Box>

            <Typography variant='h4' sx={{
                textAlign: 'center'
            }}>
                About Us
            </Typography>


            <Grid container sx={{
                paddingX: 7,
                marginX: 'auto',

            }}>
                <Grid item xs={12} md={6} lg={6} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                    <Typography variant='h5' textTransform={'uppercase'} color={'primary'} paddingBottom={2}>
                        get to know us
                    </Typography>
                    <Typography variant='h2' fontWeight={600} lineHeight={1} paddingBottom={3}>
                        Our travelair save your time and give you comfort in flights
                    </Typography>

                    <Typography variant='' lineHeight={2} color='gray'>
                        Non augue egestas, commodo velit eget, vestibulum tellus. Curabitur vulputate justo elit, at elementum orci pulvinar vel. Pellentesque habitant morbi tristique. Pellentesque habitant morbi tristique. Ut non augue egestas, commodo velit eget, vestibulum tellus.
                    </Typography>
                    <Typography paddingY={1} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        fontWeight: 'bold'
                    }} >
                        <CheckIcon color='primary' />
                        There are many variations of passage of lorem.
                    </Typography>
                    <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        fontWeight: 'bold'
                    }} >
                        <CheckIcon color='primary' />
                        Available but the majority alteration.
                    </Typography>

                    <Grid container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        marginTop: 5

                    }}>
                        <Grid item xs={12} md={6} lg={6}>
                            <Link to=''>
                                <Button variant='contained' sx={{
                                    width: '100%',
                                    padding: '15px',
                                    fontWeight: 600,
                                    fontSize: '16px',
                                    color: '#fff'

                                }}>discover more</Button>
                            </Link>
                        </Grid>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            <WifiCalling3Icon sx={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                padding: '8px',
                                background: '#fff',
                                color: '#33bccd',
                                '&:hover': {
                                    background: '#33bccd',
                                    color: '#fff'
                                },
                                cursor: 'pointer',
                                boxShadow: 1
                            }} />
                            <Box>
                                <Typography sx={{ fontSize: '12px', color: 'gray' }}>CALL ANYTIME</Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>+88 ( 8800 ) - 3280</Typography>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <img style={{ marginLeft: '50px' }} src="https://i.ibb.co/tqwrfbj/aboutImg.jpg" alt="" />
                </Grid>

            </Grid>
        </Box>

    );
};

export default About;