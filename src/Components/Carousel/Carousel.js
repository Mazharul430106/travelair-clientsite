import React from 'react';
import Slider from 'react-slick';
import DisplayCarousel from './DisplayCarousel';
import { Box } from '@mui/material';

const carouselItems = [
    {
        "title": "private jet charters",
        "img": "https://i.ibb.co/Jm556X3/slide4.jpg",
        "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut suscipit dolorum reprehenderit recusandae nobis inventore aperiam fugit Libero culpa at"
    },

    {
        "title": "comportable transfer",
        "img": "https://i.ibb.co/zsTFCk7/slide2.jpg",
        "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut suscipit dolorum reprehenderit recusandae nobis inventore aperiam fugit Libero culpa at"
    },

    {
        "title": "book your flight",
        "img": "https://i.ibb.co/nLxTr8R/slide3.jpg",
        "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut suscipit dolorum reprehenderit recusandae nobis inventore aperiam fugit Libero culpa at"
    },

    {
        "title": "luxury jet flights",
        "img": "https://i.ibb.co/XyZdhVp/slide1.jpg",
        "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut suscipit dolorum reprehenderit recusandae nobis inventore aperiam fugit Libero culpa at"
    }
]

const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <Box>
            <Slider {...settings}>
                {
                    carouselItems.map(singleItem => <DisplayCarousel singleItem={singleItem} ></DisplayCarousel>)
                }
            </Slider>
        </Box>


    );
};

export default Carousel;