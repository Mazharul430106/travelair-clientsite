import React from 'react';
import { Card, CardContent, Grid, TextField, Button, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div style={{ padding: '15px' }}>
            <Card sx={{
                maxWidth: 450,
                margin: "0 auto",

            }}>

                <Typography variant='h4' align='center' sx={{
                    margin: '10px 0'
                }}>
                    Register
                </Typography>


                <CardContent sx={{
                    padding: 2,
                    paddingBottom: '10px',
                }}>
                    <form action="">
                        <Grid container spacing={2}>
                            <Grid xs={12} item >
                                <TextField variant='outlined' label='Name *' placeholder='Enter your Name' fullWidth></TextField>
                            </Grid>
                            <Grid xs={12} item >
                                <TextField variant='outlined' label='Photo *' placeholder='Enter your Photo Link' fullWidth></TextField>
                            </Grid>
                            <Grid xs={12} item >
                                <TextField variant='outlined' label='Email *' placeholder='Enter your Email' fullWidth></TextField>
                            </Grid>
                            <Grid xs={12} item >
                                <TextField variant='outlined' label='Password *' placeholder='Enter your Password' fullWidth></TextField>
                            </Grid>
                            <Grid xs={12} item >
                                <Button type='submit' variant='contained' color='primary' fullWidth sx={{ padding: '15px' }}>Register</Button>
                            </Grid>
                        </Grid>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: '10px'
                        
                        }}>

                            <span>All ready have an account</span>
                            <Link to='/login' variant='contained' color='primary'>Please login</Link>

                        </Box>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Register;