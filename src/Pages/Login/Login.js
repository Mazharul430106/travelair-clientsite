import React, { useContext } from 'react';
import { Card, CardContent, Grid, TextField, Button, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { loginUser } = useContext(AuthContext);

    const handleLoginForm = (data, event) => {
        // console.log(data)
        loginUser(data.email, data.password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            toast.success('User Login Successfully')
            event.target.reset();
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div style={{ padding: '15px' }}>
            <Card sx={{
                maxWidth: 450,
                margin: "0 auto",

            }}>

                <Typography variant='h4' align='center' sx={{
                    margin: '10px 0'
                }}>
                    Login
                </Typography>

                <CardContent sx={{
                    padding: 2,
                    paddingBottom: '10px',
                }}>
                    <form onSubmit={handleSubmit(handleLoginForm)}>
                        <Grid container spacing={2}>

                            <Grid xs={12} item >
                                <TextField variant='outlined' label='Email *' {...register('email', { required: true })} name='email' placeholder='Enter your Email' fullWidth></TextField>
                            </Grid>
                            <Grid xs={12} item >
                                <TextField variant='outlined' label='Password *' {...register('password', { required: true })} name='password' type='password' placeholder='Enter your Password' fullWidth></TextField>
                            </Grid>
                            <Typography sx={{
                                paddingLeft: 2,
                                paddingTop: 1,
                            }}>
                                Forgot Password
                            </Typography>

                            <Grid xs={12} item >
                                <Button type='submit' variant='contained' color='primary' fullWidth sx={{ padding: '15px' }}>Login</Button>
                            </Grid>
                        </Grid>

                    </form>
                    <Typography variant='contined' sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '8px 0'
                    }}>
                        OR
                    </Typography>

                    <Grid xs={12} item>
                        <Button type='submit' variant='contained' color='primary' fullWidth sx={{ padding: '15px' }}>Login with Google</Button>
                    </Grid>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '10px'

                    }}>

                        <span>Create a new account</span>
                        <Link to='/register' variant='contained' color='primary'>Please Register</Link>

                    </Box>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;