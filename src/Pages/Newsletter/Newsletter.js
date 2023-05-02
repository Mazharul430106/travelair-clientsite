import { Box, Grid, Typography, Button, TextField, } from '@mui/material';

import React from 'react';

const Newsletter = () => {
    return (
        <Box paddingX={7} paddingY={12} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '100px',
            background: '#33bccd'
        }}>
            <Grid container spacing={2} sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Grid item xs={12} md={6} lg={6}>
                    <Typography sx={{
                        fontWeight: 600,
                        paddingBottom: 2,
                        color: '#fff'
                    }}>
                        SUBSCRIBE NOW
                    </Typography>
                    <Typography variant='h2' color='#fff'>
                        Want to know about our offers first?
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>

                    <form className='newsForm' action="" >
                        <Grid container spacing={2}>

                            <Grid item xs={12} md={8} lg={8}>
                                <TextField fullWidth variant='outlined' sx={{
                                    background: '#fff',
                                    borderRadius: '4px'
                                }} placeholder='Subscribe now' ></TextField>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4}>
                                <Button type='submit' variant='contined' fullWidth sx={{
                                    fontWeight: 600,
                                  
                                    backgroundColor: '#fff',
                                    padding: '15px 0',
                                    color: '#33bccd',
                                    '&:hover': {
                                        color: '#000'
                                    }
                                }}>Subscribe</Button>
                            </Grid>
                        </Grid>
                    </form>

                </Grid>
            </Grid>
        </Box >
    );
};

export default Newsletter;