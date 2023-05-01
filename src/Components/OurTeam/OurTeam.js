import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OurTeam = () => {

    const [teamItems, setTeamItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/teams')
            .then(res => res.json())
            .then(data => setTeamItems(data))
    }, [])

    return (
        <Box paddingX={7}>
            <Typography variant='h4' sx={{
                textAlign: 'center',
                paddingTop: '80px',
                paddingBottom: '50px'
            }}>
                Meet Our Team
            </Typography>
            <Grid container spacing={3} >
                {
                    teamItems.map(team => <Grid item xs={12} md={6} lg={3}>
                        <Card fullWidth>
                            <CardActionArea>
                                <Link to={`/checkoutPage/${team._id}`}>
                                    <CardMedia
                                        component='img'
                                        height='240'
                                        image={team.img}
                                        alt='image not found'
                                        sx={{
                                            width: '100%'
                                        }}
                                    />
                                </Link>

                                <CardContent>
                                    <Typography variant='h5' sx={{
                                        textAlign: 'center',
                                        textTransform: 'uppercase',
                                        fontWeight: 700
                                        
                                    }}>
                                        {team.name}
                                    </Typography>

                                    <Typography color='primary' sx={{
                                        textAlign: 'center',
                                        textTransform: 'uppercase',
                                        fontWeight: 600,
                                        fontSize: 14,
                                        paddingY: 1
                                    }}>
                                        {team.title}
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>)
                }
            </Grid>

        </Box>
    );
};

export default OurTeam;