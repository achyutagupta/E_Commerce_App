import React from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { bannerData } from '../../constants/Data';
import { styled } from '@mui/material';

const Image = styled('img')(({theme})=>({
    height:280,
    width:'100%',
    [theme.breakpoints.down('md')]:{
      objectFit:'cover',
      height:180
    }
}))

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Banner = () => {
  return (
    <Carousel responsive={responsive} dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px" containerClass="carousel-container" swipeable={false}
    draggable={false} infinite={true} autoPlay={true} autoPlaySpeed={3000}
  >
        {
            bannerData.map((data)=>(
                <Image src={data.url} alt="banner" />
            ))
        }
    </Carousel>
  )
}

export default Banner;
