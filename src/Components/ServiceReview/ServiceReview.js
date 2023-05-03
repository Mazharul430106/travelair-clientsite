import { Box, Button, Grid, TextField, TextareaAutosize, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';

const ServiceReview = () => {

    const { user } = useContext(AuthContext)
    // console.log(user)
    const { register, handleSubmit } = useForm();

    const handleReviewService = (data, event) => {
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            event.target.reset();
        })
        .catch(error=>{
            console.log(error);
        })

    }

    return (
        <Box paddingX={7}>
            <Typography variant='h3' paddingBottom={5} textAlign={'center'} paddingTop={7}>
                Leave a Comment
            </Typography>
            <form onSubmit={handleSubmit(handleReviewService)}>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={4}>
                        <TextField id="outlined-basic" {...register('name', { required: true })} value={user?.displayName} aria-readonly name='name' variant="outlined" fullWidth placeholder='Enter Your Name' />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <TextField id="outlined-basic" {...register('email', { required: true })} value={user?.email} aria-readonly name='email' variant="outlined" fullWidth placeholder='Enter Your Email' />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <TextField id="outlined-basic" {...register('photo', { required: true })} value={user?.photoURL} name='photo' variant="outlined" fullWidth placeholder='Enter your photo link' />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <TextField id="outlined-basic" {...register('message', { required: true })} name='message' multiline rows={8} label="Comment" variant="outlined" fullWidth placeholder='Type Service Review.....' inputProps={{
                            minLength: 80,
                            maxLength: 350,
                        }} />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <Button type='submit' variant='contained' sx={{
                            width: '100%',
                            maxWidth: { lg: '200px', md: '200px' },
                            paddingY: '15px',
                            fontWeight: 700,
                            color: '#fff'
                        }}>Submit Comment</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default ServiceReview;