import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <Box paddingX={7}>
            <Typography variant='h4' sx={{
                textAlign: 'center',
                marginTop: '60px',
                marginBottom: '50px'
            }} >
                Our Services
            </Typography>

            <Grid container spacing={2} >
                {
                    services.map(service => <Grid item xs={12} md={6} lg={3}>

                        <Card fullWidth>
                            <CardMedia
                                sx={{ height: 240 }}
                                image={service.img}
                                title="test image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {service.desc}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" >Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                    </Grid>)
                }

            </Grid>
        </Box>
    );
};

export default Services;