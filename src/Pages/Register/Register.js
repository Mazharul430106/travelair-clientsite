import React, { useContext } from 'react';
import {
    Card, CardContent, Grid, TextField,
    Button, Typography, Box, FormControl, 
    InputLabel, Select, MenuItem
} from '@mui/material'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext);
    
  


    const handleRegisterForm = (data, event) => {
        // console.log(data);

        createUser(data.email, data.password)
        .then((result)=>{
            const user = result.user;
            console.log(user)
            toast.success('User Created Successfully');
            event.target.reset();
            const profile = {
                displayName : data.name,
                photoURL: data.photo
            }

            updateUserProfile(profile)
            .then(()=>{

            })
            .catch(err=>{
                console.log(err)
            })

            handleEmailVerification();
            toast.success('Please verify your email address')

        })
        .catch(err=>{
            console.log(err);
        })
    }

    const handleEmailVerification = ()=>{
        verifyEmail()
        .then(()=>{

        })
        .catch(error=>{
            console.log(error)
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
                    Register
                </Typography>

                <CardContent sx={{
                    padding: 2,
                    paddingBottom: '10px',
                }}>
                    <form onSubmit={handleSubmit(handleRegisterForm)}>
                        <Grid container spacing={2}>
                            <Grid xs={12} item >
                                <TextField variant='outlined' label='Name *' {...register('name', { required: true })} name='name' placeholder='Enter your Name' fullWidth></TextField>
                            </Grid>
                            <Grid xs={12} item >
                                <TextField variant='outlined' label='Photo *' {...register('photo', { required: true })} name='photo' placeholder='Enter your Photo Link' fullWidth></TextField>
                            </Grid>
                            <Grid xs={12} item>
                                <FormControl fullWidth >
                                    <InputLabel variant='outlined' label='Role' id="demo-simple-select-label" placeholder='Select Your Role'>Role *</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Role"
                                        name='select'
                                        {...register('select', {required: true})}
                                    >
                                        <MenuItem value={'User'}>User</MenuItem>
                                        <MenuItem value={'Saler'}>Saler</MenuItem>
                                        <MenuItem value={'Admin'}>Admin</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid xs={12} item >
                                <TextField variant='outlined' label='Email *' {...register('email', { required: true })} name='email' placeholder='Enter your Email' fullWidth></TextField>
                            </Grid>
                            <Grid xs={12} item >
                                <TextField variant='outlined' label='Password *' {...register('password', { required: true })} name='password' type='password' placeholder='Enter your Password' fullWidth></TextField>
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