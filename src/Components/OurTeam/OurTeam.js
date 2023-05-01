import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// const teamItems = [
//     {
//         "name": "david smit",
//         "img": "https://i.ibb.co/LZY65KL/teamImg1.jpg",
//         "title": "Flight Manager"
//     },
//     {
//         "name": "Jessica brown",
//         "img": "https://i.ibb.co/zJz7mc2/teamImg4.jpg",
//         "title": "Service Manager"
//     },
//     {
//         "name": "Kevin martin",
//         "img": "https://i.ibb.co/WHntQP0/teamImg3.jpg",
//         "title": "Flight Captain"
//     },
//     {
//         "name": "Mike hardson",
//         "img": "https://i.ibb.co/n7fjL4P/teamImg5.jpg",
//         "title": "Jonior Pilot"
//     },
//     {
//         "name": "Json Roy",
//         "img": "https://i.ibb.co/hXVZt63/teamImg6.jpg",
//         "title": "Senior Pilot"
//     },
//     {
//         "name": "Robart hook",
//         "img": "https://i.ibb.co/HYNDZvg/teamImg2.jpg",
//         "title": "Flight Incharge"
//     },
//     {
//         "name": "Danis Green",
//         "img": "https://i.ibb.co/L8p5Vwc/teamImg8.jpg",
//         "title": "Flight Manager"
//     },
//     {
//         "name": "Antony Taylor",
//         "img": "https://i.ibb.co/LZDM4V9/teamImg7.jpg",
//         "title": "Flight Headmaster"
//     }
// ]



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

                        <Card sx={{ width: "100%", maxWidth: 350 }}>
                            <CardActionArea>
                                <Link to='/about'>
                                    <CardMedia
                                        component='img'

                                        height='240'
                                        image={team.img}
                                        alt='image not found'
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
                                        fontSize: 14
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