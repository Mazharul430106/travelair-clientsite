import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

const ServiceReview = () => {
    return (
        <Box paddingX={7}>
            <Typography variant='h3' paddingBottom={5} textAlign={'center'} paddingTop={7}>
                Leave a Comment
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth placeholder='Enter Your Name'/>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth placeholder='Enter Your Email' />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <TextField id="outlined-basic" multiline rows={8} label="Comment" variant="outlined" fullWidth placeholder='Type Service Review.....' />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Button type='submit' variant='contained' sx={{
                        width: '100%',
                        maxWidth: {lg:'200px', md:'200px'},
                        paddingY: '15px',
                        fontWeight: 700,
                        color:'#fff'
                        
                    }}>Submit Comment</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ServiceReview;