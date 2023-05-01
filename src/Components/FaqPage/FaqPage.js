import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqPage = () => {

    const [expand, setExpand] = useState();

    const handleExpand = (IsExpand, value) => {
        setExpand(IsExpand ? value : false)
    }

    return (
        <Box paddingX={7}>
            <Box>
                <Typography variant='h4' sx={{
                    textAlign: 'center',
                    paddingTop: '80px',
                    paddingBottom: '50px'
                }}>
                    Popular Questions
                </Typography>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                    <Accordion expanded={expand === 'one'} onChange={(event, IsExpand) => handleExpand(IsExpand, 'one')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant='h6'>
                                What payment methods exist in your company ?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus porro reprehenderit, dolores cupiditate necessitatibus, illum ducimus voluptates ex rerum perferendis eveniet accusantium ullam consequatur, nobis assumenda esse quasi magnam debitis.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>

                    <Accordion expanded={expand === 'two'} onChange={(event, IsExpand) => handleExpand(IsExpand, "two")}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant='h6'>
                                Can I retrun the product after purchase ?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus porro reprehenderit, dolores cupiditate necessitatibus, illum ducimus voluptates ex rerum perferendis eveniet accusantium ullam consequatur, nobis assumenda esse quasi magnam debitis.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Accordion expanded={expand === 'three'} onChange={(event, IsExpand) => handleExpand(IsExpand, "three")}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant='h6'>
                                How do I use a promotional code ?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus porro reprehenderit, dolores cupiditate necessitatibus, illum ducimus voluptates ex rerum perferendis eveniet accusantium ullam consequatur, nobis assumenda esse quasi magnam debitis.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>

                    <Accordion expanded={expand === 'four'} onChange={(event, IsExpand) => handleExpand(IsExpand, "four")}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant='h6'>
                                Whare and how can I exchange or refund ?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus porro reprehenderit, dolores cupiditate necessitatibus, illum ducimus voluptates ex rerum perferendis eveniet accusantium ullam consequatur, nobis assumenda esse quasi magnam debitis.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Accordion expanded={expand === 'five'} onChange={(event, IsExpand) => handleExpand(IsExpand, "five")}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant='h6'>
                                Is it possible to pay for an order with Visa and MasterCard payment cards ?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus porro reprehenderit, dolores cupiditate necessitatibus, illum ducimus voluptates ex rerum perferendis eveniet accusantium ullam consequatur, nobis assumenda esse quasi magnam debitis.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Accordion expanded={expand === 'six'} onChange={(event, IsExpand) => handleExpand(IsExpand, "six")}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant='h6'>
                                What is the validity period of the gift certificate ?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus porro reprehenderit, dolores cupiditate necessitatibus, illum ducimus voluptates ex rerum perferendis eveniet accusantium ullam consequatur, nobis assumenda esse quasi magnam debitis.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Accordion expanded={expand === 'seven'} onChange={(event, IsExpand) => handleExpand(IsExpand, "seven")}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant='h6'>
                                What if the prepaid goods are not delivered?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus porro reprehenderit, dolores cupiditate necessitatibus, illum ducimus voluptates ex rerum perferendis eveniet accusantium ullam consequatur, nobis assumenda esse quasi magnam debitis.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Accordion expanded={expand === 'eight'} onChange={(event, IsExpand) => handleExpand(IsExpand, "eight")}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant='h6'>
                                Is it Possible to pay by credit card ?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus porro reprehenderit, dolores cupiditate necessitatibus, illum ducimus voluptates ex rerum perferendis eveniet accusantium ullam consequatur, nobis assumenda esse quasi magnam debitis.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FaqPage;