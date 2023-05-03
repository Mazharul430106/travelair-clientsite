import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

const Contact = () => {
    return (
        <Box paddingX={7}>
            <Typography variant='h4' sx={{
                textAlign: 'center',
                paddingTop: '80px'
            }}>
                Contact Us
            </Typography>

            <Grid container spacing={4} sx={{
                paddingTop: '50px'
            }}>

                <Grid item xs={12} md={6} lg={6}>
                    <iframe style={{ width: '100%', minHeight: '423px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747017.215045175!2d87.70276302064964!3d23.489430803911866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1682884643759!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Typography variant='h5' color='primary' sx={{
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        paddingBottom: '25px',
                    }} >
                        get in touch
                    </Typography>

                    <form action="">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} lg={6}>
                                <TextField fullWidth id="outlined-basic" label="Fast Name" variant="outlined" placeholder='Fast_Name' />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <TextField fullWidth id="outlined-basic" label="Last Name" variant="outlined" placeholder='Last_Name' />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <TextField fullWidth id="outlined-basic" label="Email" type='email' variant="outlined" placeholder='Enter Your Email' />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <TextField fullWidth id="outlined-basic" label="Password" type='password' variant="outlined" placeholder='Enter Your Password' />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <TextField multiline rows={5} fullWidth id="outlined-basic" label="Message" type='text' variant="outlined" placeholder='Type Here.....' />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <Button variant='contained' fullWidth sx={{paddingY:2, fontWeight: 700, color: '#fff'}}>Submit</Button>
                            </Grid>
                        </Grid>

                    </form>

                </Grid>

            </Grid>
        </Box>
    );
};

export default Contact;